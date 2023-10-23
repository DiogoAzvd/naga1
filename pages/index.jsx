export default function Main() {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Patrick Hand"></link>
            <Introduction />
            <Project />
        </>        
    );
}


function Introduction() {
    let turn_on_off = 1;

    function copy_to_clipboard() {
        if (turn_on_off == 1) {
            turn_on_off = 0;
            let text = "dummy_naga#0";
            navigator.clipboard.writeText(text);

            const clipboard_box = document.querySelector(".clipboard");
            clipboard_box.classList.add("show_hide");

            setTimeout(() => {
                clipboard_box.classList.remove("show_hide");
                
                setTimeout(() => {
                    turn_on_off = 1;
                }, 1200)
            }, 2000)
        }
    }

    return (
        <div id="introduction">
            <div id="intro_block">
                <div id="title_block">
                    <div id="title">Welcome!</div>
                </div>

                <div id="text_block">
                    <div id="text">You can call me Naga. I will be posting my projects here. Mainly working with React, JS, HTML, CSS and Next.js.</div>
                </div>

                <div id="contact_block">
                    <div id="discord_img" onClick={copy_to_clipboard}></div>
                    <div id="discord" onClick={copy_to_clipboard}>dummy_naga#0</div>
                    <div className="clipboard">Copied to clipboard!</div>
                </div>
            </div>
        </div>
    );
}


function Project() {
    return (
        <div id="project">
            <Moon_project class_name = "hangul_memorizer" title = "Hangul Memorizer" text = "Hangul is the name of the korean alphabet! The purpose of the site is to help memorize it while playing a minigame, where it is displayed a korean letter and you need to select its romanized version." link = "http://hangulmemorizer.vercel.app"/>

            <div id="project_block">
                <div id="project_title">Project List</div>
                <div id="project_tip">Click on an item to display image and description.</div>
                <div id="project_list">
                    <Moon_list text = "Hangul Memorizer" project_class = ".hangul_memorizer"/>
                    <div>Placeholder</div>
                    <div>Placeholder</div>
                </div>
            </div>
        </div>
    );
}


function Moon_list(data) {
    function hide_project_list() {
        const project_list = document.getElementById("project_block");
        project_list.style.display = "none";

        const project = document.querySelector(data["project_class"]);
        project.style.display = "flex";
    }

    return (
        <div id="moon_list">
            <div id="moon_icon"></div>
            <div id="moon_text" onClick={hide_project_list}>{data["text"]}</div>
        </div>
    );
}


function Moon_project(data) {
    function hide() {
        const element = document.querySelector("." + data["class_name"]);
        element.style.display = "none";

        const project_list = document.getElementById("project_block");
        project_list.style.display = "flex";
    }

    function open_link() {
        window.open(`${data["link"]}`);
    }

    return (
        <div className={`${data["class_name"]} moon_project`}>
            <div className="moon_project_title">
                <span className="project_link" onClick={open_link}>{data["title"]}</span>
                <div className="close_moon_project" onClick={hide}>X</div>
            </div>                 

            <div className="moon_project_img_block">
                    <div className="moon_project_img"></div>
            </div>

            <div className="moon_project_text">
                {data["text"]}
            </div>
        </div>
    );
}
