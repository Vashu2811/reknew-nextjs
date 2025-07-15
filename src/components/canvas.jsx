"use client";

import { useEffect, useRef, useState } from "react";

let isClient = typeof window !== "undefined";
let canvasRef = null;
let intervalId = null;
let cleanup = null;

function mountCanvas(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const colorDot = "#ff7155";
    const color = "#ff7155";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    ctx.fillStyle = colorDot;
    ctx.lineWidth = 0.1;
    ctx.strokeStyle = color;

    const isMobile = window.innerWidth < 768;

    const mousePosition = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    };

    const dots = {
        nb: isMobile ? 150 : 600,
        distance: isMobile ? 40 : 60,
        d_radius: isMobile ? 60 : 100,
        array: [],
    };

    function Dot() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();
        this.radius = isMobile ? 1 : Math.random();
    }

    Dot.prototype = {
        create: function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        },
        animate: function () {
            for (let i = 0; i < dots.nb; i++) {
                let dot = dots.array[i];
                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vy = -dot.vy;
                } else if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = -dot.vx;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        },
        line: function () {
            for (let i = 0; i < dots.nb; i++) {
                for (let j = 0; j < dots.nb; j++) {
                    let i_dot = dots.array[i];
                    let j_dot = dots.array[j];
                    if (
                        Math.abs(i_dot.x - j_dot.x) < dots.distance &&
                        Math.abs(i_dot.y - j_dot.y) < dots.distance
                    ) {
                        if (
                            Math.abs(i_dot.x - mousePosition.x) < dots.d_radius &&
                            Math.abs(i_dot.y - mousePosition.y) < dots.d_radius
                        ) {
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        },
    };

    function createDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (dots.array.length === 0) {
            for (let i = 0; i < dots.nb; i++) {
                dots.array.push(new Dot());
            }
        }
        dots.array.forEach((dot) => dot.create());
        Dot.prototype.line();
        Dot.prototype.animate();
    }

    function handleMouseMove(e) {
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);
    intervalId = setInterval(createDots, 1000 / 30);

    cleanup = () => {
        clearInterval(intervalId);
        window.removeEventListener("mousemove", handleMouseMove);
    };
}

function unmountCanvas() {
    if (cleanup) cleanup();
}

export default function CanvasDots() {
    const [mounted, setMounted] = useState(false);
    const canvasRefLocal = useRef(null);

    useEffect(() => {
        setMounted(true);
        return () => {
            setMounted(false);
        };
    }, []);

    useEffect(() => {
        if (mounted && canvasRefLocal.current) {
            mountCanvas(canvasRefLocal.current);
            return () => {
                unmountCanvas();
            };
        }
    }, [mounted]);

    if (!mounted) return null;

    return (
        <canvas
            ref={canvasRefLocal}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
        ></canvas>
    );
}