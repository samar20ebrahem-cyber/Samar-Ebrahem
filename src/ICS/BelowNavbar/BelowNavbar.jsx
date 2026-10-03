import { HiHome, HiUser, HiCodeBracket, HiFolder, HiEnelope, HiAcademicCap, HiWorkStory } from "react-icons/hi2"

export function BelowNavbar() {
    return (
        <>
            <div>
                <div>
                    <button>
                        <HiHome />
                    </button>
                    <button>
                        <HiUser />
                    </button>
                    <button>
                        <HiWorkStory />
                    </button>
                    <button>
                        <HiAcademicCap />
                    </button>
                    <button>
                        <HiCodeBracket />
                    </button>
                    <button>
                        <HiFolder />
                    </button>
                    <button>
                        <HiEnelope />
                    </button>
                </div>
            </div>
        </>
    )
}