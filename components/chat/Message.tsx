import Image from "next/image";
import React from "react";
interface message {
    message: string;
    timestamp: any;
    displayName: string;
    photoUrl: string;
    postImage: string;
}

export const Message = (props: message) => {
    return (
        <div className="flex hover:bg-fabchat-hoverPrimary py-2 items-center relative">
            <div className="flex flex-col items-start justify-start p-2 cursor-pointer">
                {props.photoUrl ? (
                    <Image
                        src={props.photoUrl}
                        alt="dp"
                        height={40}
                        width={40}
                        className="h-12 w-12 rounded-full"
                    />
                ) : (
                    <img
                        src={
                            "https://cdn.britannica.com/61/103761-050-0174C1D5/Angelina-Jolie-Hollywood.jpg?w=400&h=300&c=crop"
                        }
                        alt="jolie"
                        className="h-12 w-12 rounded-full"
                    />
                )}
            </div>

            <div className="ml-3">
                <p className="text-md cursor-pointer font-semibold text-fabchat-text">
                    {props.displayName}
                    <span className="ml-4 cursor-default text-xs font-normal text-gray-400 hover:no-underline">
                        {props.timestamp &&
                            new Date(
                                props.timestamp?.toDate()
                            ).toLocaleString()}
                    </span>
                </p>

                {props.postImage && (
                    <div>
                        <Image
                            src={props.postImage}
                            alt="image"
                            height={200}
                            width={200}
                            className="w-52 cursor-pointer object-contain"
                        />
                    </div>
                )}

                <p className="text-fabchat-text">{props.message}</p>
            </div>
        </div>
    );
};
