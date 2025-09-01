// components/about/TeamSection.tsx
const TeamSection = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Alex Johnson',
            role: 'CEO & Founder',
            image: '/team-1.jpg',
            description: 'Tech enthusiast with 10+ years of experience in software development and business strategy.'
        },
        {
            id: 2,
            name: 'Sarah Williams',
            role: 'CTO',
            image: '/team-2.jpg',
            description: 'Expert in cloud architecture and scalable systems with a passion for innovation.'
        },
        {
            id: 3,
            name: 'Michael Chen',
            role: 'Lead Designer',
            image: '/team-3.jpg',
            description: 'Creative designer focused on creating intuitive user experiences and beautiful interfaces.'
        },
        {
            id: 4,
            name: 'Priya Patel',
            role: 'Senior Developer',
            image: '/team-4.jpg',
            description: 'Full-stack developer specializing in React, Node.js, and modern web technologies.'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Our diverse team of experts is passionate about technology and dedicated to delivering exceptional results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
                            <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-2xl font-bold text-blue-600">{member.name.charAt(0)}</span>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                                <p className="text-blue-600 mb-3">{member.role}</p>
                                <p className="text-gray-600">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;