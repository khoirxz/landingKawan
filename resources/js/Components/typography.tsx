export const TitleText: React.FC<{ children: string, color?: string }> = ({ children, color = "text-[#0a0633]" }) => {

    return (
        <h2 className={`text-3xl font-thin tracking-tighter sm:text-4xl md:text-5xl ${color}`}>
            {children}
        </h2>
    );
};

export const SubtitleText: React.FC<{ children: string, color?: string }> = ({ children, color = "text-gray-600" }) => {
    return (
        <p className={`max-w-[700px] md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed ${color}`}>
            {children}
        </p>
    );
};
