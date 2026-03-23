import React from 'react';

type CheeseSize = 'sm' | 'md' | 'lg' | 'xl';
type CheeseMood = 'happy' | 'writing' | 'chat' | 'sleepy' | 'excited' | 'confused' | 'running' | 'camera';

interface CheeseAvatarProps {
  size?: CheeseSize;
  mood?: CheeseMood;
  className?: string;
  animate?: boolean;
}

const sizeMap = {
  sm: { container: 'w-8 h-8', emoji: 'text-lg' },
  md: { container: 'w-12 h-12', emoji: 'text-2xl' },
  lg: { container: 'w-16 h-16', emoji: 'text-[30px]' },
  xl: { container: 'w-24 h-24', emoji: 'text-5xl' }
};

const moodMap: Record<CheeseMood, string> = {
  happy: '🐄',
  writing: '📝',
  chat: '💬',
  sleepy: '😴',
  excited: '🎉',
  confused: '😅',
  running: '🏃',
  camera: '📸'
};

export function CheeseAvatar({ size = 'md', mood = 'happy', className = '', animate = false }: CheeseAvatarProps) {
  const sizeClass = sizeMap[size];
  const emoji = moodMap[mood];
  
  return (
    <div 
      className={`${sizeClass.container} rounded-full flex items-center justify-center ${animate ? 'animate-float' : ''} ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 213, 79, 0.3) 0%, rgba(255, 204, 128, 0.2) 100%)',
        border: '2px solid #FFCC80'
      }}
    >
      <span className={sizeClass.emoji}>{emoji}</span>
    </div>
  );
}
