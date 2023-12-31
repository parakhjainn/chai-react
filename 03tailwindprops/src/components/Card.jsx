import React from 'react'

// Another way is function Card (props) and use props.username
function Card({username, btnText = "Visit Me"}) {

    return (
        <figure className = "md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">

            <img className = "w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.unsplash.com/photo-1697792480519-3e2e7eba4be0?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512" />

                <div className = "pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className = "text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>

                    <figcaption className = "font-medium">
                        <div className = "text-sky-500 dark:text-sky-400">
                            {username}
                        </div>
                        <div className = "text-slate-700 dark:text-slate-500">
                            Staff Engineer, Algolia
                        </div>
                        <button> {btnText} </button>
                    </figcaption>

                </div>
        </figure>
    )
}

export default Card