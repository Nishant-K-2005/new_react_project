import React from 'react'
import UserIcon from './../assets/user.png'

// dereferencing the props in the parameter itself
export default function User({name_,role="Not Defined"}) {
    return (
        <div class="mx-auto mt-10 flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 border-2 border-purple-500 rounded-xl w-80 mb-10">
            <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={UserIcon} alt="" />
            <div class="space-y-2 text-center sm:text-left">
                <div class="space-y-0.5">
                    <p class="text-lg font-semibold text-black">{name_}</p>
                    <p class="font-medium text-gray-500">{role}</p>
                </div>
                <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-2 rounded-xl">
                    Message
                </button>
            </div>
        </div>
    )
}
