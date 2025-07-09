'use client';

import { useState } from 'react';
import ReKnewModal from './Modal/ReKnewModal';

export default function HomeClientWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ReKnewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* You can expose a button to open modal here if needed */}
    </>
  );
}