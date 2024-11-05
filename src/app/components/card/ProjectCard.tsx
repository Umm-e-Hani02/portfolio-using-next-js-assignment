// // import Image from "next/image";
// const ProjectCard = ({
//     imageSrc,
//     imageAlt,
//     title
// } : {
//     imageSrc: string;
//     imageAlt: string;
//     title: string
// }) => {
//     return (
//         <div className="flex flex-col items-center gap-4">
//             <div className="bg-purple-800 p-4 rounded-lg flex flex-col items-center">
//                 <img
//                     className="w-48 h-48 object-cover rounded-md"
//                     src={imageSrc}
//                     alt={imageAlt}
//                 />
//                 <p className="text-white mt-2">{title}</p>
//             </div>
//         </div>
//     );
// };

// export default ProjectCard;

import Image from "next/image";

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
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={192}         
                    height={192}         
                />
                <p className="text-white mt-2">{title}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
