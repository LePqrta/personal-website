import React, { ReactNode } from 'react';
import './Card.css';

interface CardProps {
    title: string;
    children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
    return (
        <div className="card">
            {title && <h2>{title}</h2>}
            {children}
        </div>
    );
}