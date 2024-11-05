// const ProjectCard = ({
//     imageSrc,
//     imageAlt,
//     title
// } : {
//     imageSrc: string;
//     imageAlt: string;
//     title: string
// }) => {
//     return(
//         <div className="gap-10">
//         <div className="bg-purple-800 gap-10">
//         <img className="h-48 w-48 object-contain rounded-md" src={imageSrc} alt={imageAlt}/>
//         <p className="text-white">{title}</p>
//         </div>
//         </div>
//     )
// }

// export default ProjectCard


const ProjectCard = ({
    imageSrc,
    imageAlt,
    title
} : {
    imageSrc: string;
    imageAlt: string;
    title: string
}) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center">
                <img
                    className="w-48 h-48 object-cover rounded-md"
                    src={imageSrc}
                    alt={imageAlt}
                />
                <p className="text-white mt-2">{title}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
