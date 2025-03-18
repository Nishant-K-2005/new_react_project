import React from 'react'
import msgLogo from "./../assets/Msg.png"

// Using Props in orignal Syntax
export default function Card(props) {

    return (
        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 mt-10">
            <img className="size-12 shrink-0" src={msgLogo} alt="ChitChat Logo" />
            <div>
                <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
                <p className="text-gray-500 dark:text-gray-400">You have a new message from <br/>
                    <span id='name'>{props.name_}</span><br/>
                    <span id='username'>{props.user.userId}</span><br/>
                    <span id='name'>{props.user.phone}</span><br/>
                </p>
            </div>
        </div>
    )
}
