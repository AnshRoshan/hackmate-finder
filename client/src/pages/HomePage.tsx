import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import MatchSearches from './matchesSearch'

export default function HomePage() {
    const [skills, setSkills] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isGithubSignIn, setIsGithubSignIn] = useState(false);
    const [isLinkedInSignIn, setIsLinkedInSignIn] = useState(true);

    // Mock data for skills autocomplete
    const suggestedSkills = [
        "JavaScript", "React", "Node.js", "Python", "TypeScript",
        "Flutter", "SwiftUI", "Kotlin", "Go", "Rust", "AWS",
        "Machine Learning", "Data Science", "DevOps", "UI/UX Design"
    ];

    const filteredSkills = suggestedSkills.filter(skill =>
        skill.toLowerCase().includes(inputValue.toLowerCase()) &&
        !skills.includes(skill)
    );

    const addSkill = (skill: string) => {
        if (!skills.includes(skill) && skill.trim() !== "") {
            setSkills([...skills, skill]);
            setInputValue("");
        }
    };

    const removeSkill = (skill: string) => {
        setSkills(skills.filter(s => s !== skill));
    };

    return (
        <>
            <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-black min-h-screen relative overflow-hidden">
                {/* Purple accent background elements */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-purple-800/20 rounded-full filter blur-[100px]" />
                    <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-indigo-800/20 rounded-full filter blur-[100px]" />
                </div>

                <Header />
                <article className='mb-3' />

                <section className='flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-20 pt-10 relative z-10'>
                    <div className='text-white lg:w-1/2'>
                        <img src="/illustration.png" className='object-contain m-auto mb-8 w-[350px] filter drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]' alt="img" />

                        <h1 className='text-4xl font-bold pb-4 text-center'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400'>
                                Find the Perfect Dev
                            </span> for you
                        </h1>

                        <p className='max-w-md text-center mb-8 m-auto text-gray-300'>
                            Connect with Developers who match your skill set and build connections through our AI-powered matching portal
                        </p>

                        <div className='p-3 flex flex-wrap items-center justify-center m-auto gap-4 rounded-[40px] px-5 w-fit
                                  border border-white/10 backdrop-blur-md bg-gray-800/30
                                  shadow-[0_0_15px_rgba(0,0,0,0.2)]'>
                            <article className='flex items-center gap-2 text-gray-200'>
                                <i className='pi pi-user text-purple-400' />
                                <span className="font-medium">14k+ devs</span>
                            </article>
                            <span className='inline-block h-5 w-[1px] bg-gray-600' />
                            <article className='flex items-center gap-2 text-gray-200'>
                                <i className='pi pi-calendar text-purple-400' />
                                <span className="font-medium">5k+ events</span>
                            </article>
                            <span className='inline-block h-5 w-[1px] bg-gray-600' />
                            <article className='flex items-center gap-2 text-gray-200'>
                                <i className='pi pi-code text-purple-400' />
                                <span className="font-medium">3k+ tech stack</span>
                            </article>
                        </div>
                    </div>

                    <div className='lg:w-1/2 w-full max-w-md'>
                        <div className='rounded-2xl overflow-hidden
                                  border border-white/10 backdrop-blur-lg
                                  bg-gradient-to-br from-gray-800/60 via-gray-800/30 to-gray-800/60
                                  shadow-[0_0_25px_rgba(0,0,0,0.3)]'>

                            <div className='px-8 py-5 border-b border-white/10 flex justify-between items-center'>
                                <h2 className='text-2xl font-semibold text-white flex items-center gap-2'>
                                    <i className='pi pi-search text-purple-400' />
                                    Find Your HackMate
                                </h2>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                            </div>

                            <div className='p-8 space-y-6'>
                                {/* Skills input with tags */}
                                <div className='space-y-2'>
                                    <label className='text-sm font-medium text-gray-300'>Skills</label>
                                    <div className='relative'>
                                        <div className='flex flex-wrap gap-2 p-2 bg-gray-800/80 border border-white/10 rounded-lg min-h-[50px]
                                                  focus-within:border-purple-500/50 focus-within:ring-1 focus-within:ring-purple-500/30'>
                                            {skills.map(skill => (
                                                <span key={skill}
                                                    className='flex items-center gap-1 px-3 py-1 rounded-full text-sm
                                                           bg-purple-800/60 text-white border border-purple-500/30'>
                                                    {skill}
                                                    <button
                                                        onClick={() => removeSkill(skill)}
                                                        className='text-purple-300 hover:text-white ml-1'
                                                    >
                                                        <i className='pi pi-times' />
                                                    </button>
                                                </span>
                                            ))}
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={e => setInputValue(e.target.value)}
                                                onKeyDown={e => {
                                                    if (e.key === 'Enter' && inputValue.trim()) {
                                                        e.preventDefault();
                                                        addSkill(inputValue);
                                                    }
                                                }}
                                                placeholder={skills.length ? "" : "Add skills (e.g., JavaScript, React)"}
                                                className='flex-grow min-w-[120px] bg-transparent border-none outline-none text-white placeholder:text-gray-500'
                                            />
                                        </div>

                                        {inputValue && filteredSkills.length > 0 && (
                                            <div className='absolute z-10 mt-1 w-full max-h-[200px] overflow-y-auto 
                                                      bg-gray-800 border border-white/10 rounded-lg shadow-lg'>
                                                {filteredSkills.map(skill => (
                                                    <div
                                                        key={skill}
                                                        onClick={() => addSkill(skill)}
                                                        className='px-4 py-2 hover:bg-purple-800/30 cursor-pointer text-gray-200'
                                                    >
                                                        {skill}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Resume upload field */}
                                <div className='space-y-2'>
                                    <label className='text-sm font-medium text-gray-300'>Resume</label>
                                    <div className='relative'>
                                        <input
                                            type="file"
                                            className="block w-full text-sm text-gray-300
                                                file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0
                                                file:text-sm file:font-medium
                                                file:bg-purple-600/70 file:text-white
                                                hover:file:bg-purple-500/70
                                                border border-white/10 rounded-lg p-2
                                                focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30"
                                        />
                                    </div>
                                </div>

                                {/* LinkedIn and GitHub fields */}
                                <div className='flex flex-col sm:flex-row gap-4'>
                                    <div className='flex-1 space-y-2'>
                                        <label className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                                            <i className="pi pi-linkedin text-purple-400" />
                                            LinkedIn
                                        </label>
                                        <input
                                            type="text"
                                            className={`w-full bg-gray-800/80 border border-white/10 rounded-lg px-4 py-2.5 
                                                 ${isLinkedInSignIn ? 'bg-gray-700/50 text-gray-400' : 'focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 text-white'}`}
                                            placeholder="linkedin.com/in/username"
                                            value={isLinkedInSignIn ? "johndoe" : ""}
                                            readOnly={isLinkedInSignIn}
                                        />
                                    </div>

                                    <div className='flex-1 space-y-2'>
                                        <label className='text-sm font-medium text-gray-300 flex items-center gap-2'>
                                            <i className="pi pi-github text-purple-400" />
                                            GitHub
                                        </label>
                                        <input
                                            type="text"
                                            className={`w-full bg-gray-800/80 border border-white/10 rounded-lg px-4 py-2.5 
                                                 ${isGithubSignIn ? 'bg-gray-700/50 text-gray-400' : 'focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 text-white'}`}
                                            placeholder="github.com/username"
                                            value={isGithubSignIn ? "devjohn" : ""}
                                            readOnly={isGithubSignIn}
                                        />
                                    </div>
                                </div>

                                {/* Action button */}
                                <button className='w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 
                                            hover:from-purple-500 hover:to-indigo-500 
                                            text-white font-medium py-3 rounded-lg transition-all duration-300
                                            shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
                                            border border-purple-500/30 flex items-center justify-center gap-2'>
                                    <i className='pi pi-search' />
                                    Find Matches
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </section>
            <MatchSearches />
        </>
    )
}