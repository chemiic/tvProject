import { ReactNode } from 'react';

interface ShadowBoxProps {
    children: ReactNode;
    className?: string;
}

export const ShadowBox = ({ children, className }: ShadowBoxProps) => {
    return (
        <div className={`bg-[#00000020] p-[20px] rounded-[20px] max-h-[70vh] ${className ? ` ${className}` : ''}`}>
            {children}
        </div>
    );
}