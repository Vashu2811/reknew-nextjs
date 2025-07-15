/* eslint-disable no-unused-vars */
// This component is SSR-compatible: all browser APIs are inside handlers.
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsArrowUpLeftCircle } from 'react-icons/bs';

class HiringModel {
    constructor(props) {
        this.props = props;
        this.state = {
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                position: '',
                experience: '',
                resume: null,
                portfolio: '',
                resumeFileName: ''
            }
        };
        // Bind methods
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.render = this.render.bind(this);
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        // No automatic re-render, must be handled by parent
    }

    handleChange(e) {
        const { name, value, files } = e.target;
        if (files && files.length > 0) {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: files[0],
                    resumeFileName: files[0].name
                }
            });
        } else {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: value
                }
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { firstName, lastName, email, position, experience, portfolio, resume } = this.state.formData;

        if (resume) {
            try {
                const reader = new FileReader();
                reader.readAsDataURL(resume);
                reader.onload = () => {
                    const base64Data = reader.result.split(',')[1];
                    const payload = {
                        subject: `New Job Application: ${firstName} ${lastName}`,
                        message: `
                    Name: ${firstName} ${lastName}
                    Email: ${email}
                    Position: ${position}
                    Experience: ${experience}
                    Portfolio: <a href="${portfolio}" target="_blank">${portfolio}</a>
                `,
                        to: ['talent@reknew.ai'],
                        fileName: `${resume.name}`,
                        fileContentBase64: base64Data,
                        mimeType: 'text/plain'
                    };

                    axios
                        .post('https://r621x20pve.execute-api.us-east-1.amazonaws.com/default/sendSuppportEmail', JSON.stringify(payload), {
                            headers: {
                                'Content-Type': 'text/plain; charset=utf-8'
                            },
                            withCredentials: false
                        })
                        .then((res) => {
                            toast.success('Application submitted successfully!', {
                                toastStyle: {
                                    backgroundColor: '#FF512F',
                                    color: '#fff'
                                }
                            });
                            this.setState({
                                formData: {
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    position: '',
                                    experience: '',
                                    resume: null,
                                    portfolio: '',
                                    resumeFileName: ''
                                }
                            });
                        })
                        .catch((error) => {
                            toast.error('Failed to submit application.', {
                                toastStyle: {
                                    backgroundColor: '#FF512F',
                                    color: '#fff'
                                }
                            });
                        });
                };
                reader.onerror = (error) => {
                    // eslint-disable-next-line no-console
                    console.log('Error: ', error);
                };
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Error reading file:', error);
            }
        }
    }

    render() {
        const { isOpen, onClose, isDarkMode } = this.props;
        const { formData } = this.state;
        if (!isOpen) return null;

        return (
            <>
                <ToastContainer
                    toastClassName="custom-toast"
                    bodyClassName="custom-toast-body"
                    progressClassName="custom-toast-progress"
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <div className="fixed hiring-form inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                    <div className={`bg-gradient-to-br rounded-3xl shadow-2xl p-10 w-full max-w-4xl relative border animate-fadeIn overflow-y-auto md:overflow-auto lg:overflow-hidden max-h-[90vh]${isDarkMode ? " from-gray-900 via-gray-800 to-gray-900 border-gray-700" : " from-white via-gray-100 to-white border-gray-200"}`}>
                        <button
                            onClick={onClose}
                            className={`absolute top-4 right-4 text-3xl transition-transform transform hover:scale-110${isDarkMode ? " text-gray-400 hover:text-gray-300" : " text-gray-400 hover:text-gray-700"}`}>
                            ✕
                        </button>
                        <h2 className={`text-3xl md:text-4xl lg:text-5xl text-center font-extrabold tracking-tight mb-4${isDarkMode ? " text-gray-100" : " text-gray-800"}`}>
                            Join Our <span className="text-[#FF512F]">Team</span>
                        </h2>
                        <p className={`text-base md:text-lg mb-10 md:mb-4 text-center max-w-2xl mx-auto leading-relaxed${isDarkMode ? " text-gray-300" : " text-gray-600"}`}>
                            If you are an engineer at heart and have deep work ethic, share your GitHub link.
                        </p>
                        <form onSubmit={this.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Basic Info */}
                            <div className="flex flex-col">
                                <label className={`text-sm mb-2 font-medium${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={this.handleChange}
                                    required
                                    className={`w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF512F] transition${isDarkMode ? " border-gray-600 text-white bg-gray-800 placeholder-gray-500" : " border-gray-300 text-gray-700 bg-white placeholder-gray-400"}`}
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className={`text-sm mb-2 font-medium${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={this.handleChange}
                                    required
                                    className={`w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF512F] transition${isDarkMode ? " border-gray-600 text-white bg-gray-800 placeholder-gray-500" : " border-gray-300 text-gray-700 bg-white placeholder-gray-400"}`}
                                    placeholder="Enter your last name"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className={`text-sm mb-2 font-medium${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={this.handleChange}
                                    required
                                    className={`w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF512F] transition${isDarkMode ? " border-gray-600 text-white bg-gray-800 placeholder-gray-500" : " border-gray-300 text-gray-700 bg-white placeholder-gray-400"}`}
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className={`text-sm mb-2 font-medium${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>Position</label>
                                <input
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={this.handleChange}
                                    required
                                    className={`w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF512F] transition${isDarkMode ? " border-gray-600 text-white bg-gray-800 placeholder-gray-500" : " border-gray-300 text-gray-700 bg-white placeholder-gray-400"}`}
                                    placeholder="Position applying for"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className={`text-sm mb-2 font-medium${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>Years of Experience</label>
                                <input
                                    type="number"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={this.handleChange}
                                    required
                                    className={`w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF512F] transition${isDarkMode ? " border-gray-600 text-white bg-gray-800 placeholder-gray-500" : " border-gray-300 text-gray-700 bg-white placeholder-gray-400"}`}
                                    placeholder="Years of experience"
                                    min="0"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className={`text-sm mb-2 font-medium${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>Github URL</label>
                                <input
                                    type="url"
                                    name="portfolio"
                                    value={formData.portfolio}
                                    onChange={this.handleChange}
                                    className={`w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF512F] transition${isDarkMode ? " border-gray-600 text-white bg-gray-800 placeholder-gray-500" : " border-gray-300 text-gray-700 bg-white placeholder-gray-400"}`}
                                    placeholder="https://your-github.com"
                                />
                            </div>

                            <div className="flex flex-col md:col-span-2">
                                <label htmlFor="resume" className={`text-sm font-medium mb-2${isDarkMode ? " text-gray-300" : " text-gray-700"}`}>
                                    Upload Resume
                                </label>
                                <div className="relative">
                                    <input
                                        id="resume"
                                        type="file"
                                        name="resume"
                                        onChange={this.handleChange}
                                        required
                                        accept=".pdf,.doc,.docx"
                                        className="peer hidden"
                                    />
                                    <label
                                        htmlFor="resume"
                                        className={`w-full flex items-center justify-between px-5 py-3 border rounded-xl cursor-pointer hover:border-[#FF512F] transition-colors${isDarkMode ? " border-gray-600 text-white bg-gray-800" : " border-gray-300 text-gray-700 bg-white"}`}>
                                        <span className="truncate">{formData.resumeFileName || 'Choose a file (.pdf, .doc, .docx)'}</span>
                                        <BsArrowUpLeftCircle className="w-5 h-5 text-[#FF512F] rotate-90" />
                                    </label>
                                </div>
                            </div>
                            <div className="md:col-span-2 mt-10 md:mt-4 flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] hover:from-[#FF8A63] hover:to-[#FF512F] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default HiringModel;
