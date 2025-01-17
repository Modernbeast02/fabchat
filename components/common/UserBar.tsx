import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSlice";

function UserBar() {
    const user = useSelector(selectUser);
    return (
        <div className="absolute bottom-3 left-2">
            <div className="flex space-x-2">
                <Image
                    src={user.photoURL as string}
                    alt={user.displayName as string}
                    height={50}
                    width={50}
                    className="rounded-full h-12 w-12 cursor-pointer hover:opacity-90"
                />
                <div>
                    <p className="font-bold text-white truncate">
                        {user?.displayName as string}
                    </p>
                    <p className="text-fabchat-subtext">Online</p>
                </div>
            </div>
        </div>
    );
}

export default UserBar;
