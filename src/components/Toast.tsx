interface ToastProps {
  message: string;
  type: 'success' | 'warning';
}

export default function Toast({ message, type }: ToastProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '120px',
        right: 'calc((100vw - 1512px) / 2 + 8px)',
        padding: '24px 40px',
        backgroundColor: type === 'success' ? '#4CAF50' : '#FF9800',
        color: 'white',
        borderRadius: '8px',
        fontFamily: 'Inter',
        fontSize: '28px',
        fontWeight: '500',
        zIndex: 1000,
        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      {message}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}