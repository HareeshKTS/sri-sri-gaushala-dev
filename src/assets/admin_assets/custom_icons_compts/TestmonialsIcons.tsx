type TestmonialsIconsProps = {
    color?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    secondaryColor?: string;
    primaryColor?: string;
};

const TestmonialsIcons: React.FC<TestmonialsIconsProps> = ({
    width = 15,
    height = 20,
    secondaryColor = "#002602",
    primaryColor = "#ffffff",
    className = "",
}) => {

    const path = `
        M8.429 10.5H7.152c.6-1.729 1.107-2.557 2.8-3.264
        A.643.643 0 0 0 9.708 6c-3.539.006-5.572 1.425-7.013 4.893
        A8.854 8.854 0 0 0 2 14.357a6.868 6.868 0 0 0 1.42 4.2
        .643.643 0 0 0 .541.3h4.468a1.931 1.931 0 0 0 1.929-1.929
        v-4.5A1.931 1.931 0 0 0 8.429 10.5Zm9.643 0H16.8
        c.6-1.729 1.107-2.557 2.8-3.264A.643.643 0 0 0 19.351 6
        c-3.539.006-5.572 1.425-7.013 4.893a8.854 8.854 0 0 0-.694 3.464
        6.868 6.868 0 0 0 1.42 4.2.643.643 0 0 0 .541.3h4.468
        A1.931 1.931 0 0 0 20 16.929v-4.5a1.931 1.931 0 0 0-1.929-1.929Z
    `;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 18 12.857"
        >
            <path
                d={path}
                transform="translate(-2 -6)"
                fill={secondaryColor}
            />

            <path
                d={path}
                transform="translate(-2 -6)"
                fill={primaryColor}
                opacity={0.5}
            />
        </svg>
    );
};

export default TestmonialsIcons;
