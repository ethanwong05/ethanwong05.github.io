import * as React from 'react';
import { useState } from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Linkedin, 
  Mail, 
  FileText, 
  Award,
  ExternalLink,
  Github,
  Phone,
  MapPin,
  Calendar,
  Star,
  Database,
  Brain,
  Monitor,
  Server
} from 'lucide-react';

export default function PortfolioBinder() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const CARDS_PER_PAGE = 8;
  
  const portfolioCards = [
    {
      id: 'about',
      title: 'Ethan Wong',
      subtitle: 'CS & Poli Sci Student',
      type: 'Profile',
      hp: '3.80',
      hpLabel: 'GPA',
      icon: User,
      bgColor: '#4F46E5', // Solid indigo
      borderColor: '#FCD34D', // Amber
      moves: [
        {
          name: 'Location',
          description: 'Solna, Sweden / Boston, MA / New York, NY',
          power: ''
        },
        {
          name: 'Education',
          description: 'Northeastern University',
          power: 'Graduating 2027'
        }
      ],
      description: 'Computer Science and Political Science dual major at Northeastern University. Dean\'s List student with experience in AI, databases, and full-stack development.',
      empty: false
    },
    {
      id: 'languages',
      title: 'Programming Skills',
      subtitle: 'Technical Expertise',
      type: 'Technical',
      hp: '8+',
      hpLabel: 'Languages',
      icon: Code,
      bgColor: '#059669', // Solid emerald
      borderColor: '#FCD34D',
      moves: [
        {
          name: 'Backend Development',
          description: 'Java, Python, C, SQL, NoSQL',
          power: ''
        },
        {
          name: 'Frontend Development',
          description: 'JavaScript, ReactJS, GraphQL, Kotlin',
          power: ''
        }
      ],
      description: 'Proficient in multiple programming languages and frameworks. Experience with AWS, Vercel, Linear, and GitHub.',
      empty: false
    },
    {
      id: 'ai_project',
      title: 'AI Volleyball Analyzer',
      subtitle: 'Computer Vision Project',
      type: 'Project',
      hp: '2025',
      hpLabel: 'April',
      icon: Brain,
      bgColor: '#7C3AED', // Solid purple
      borderColor: '#FCD34D',
      moves: [
        {
          name: 'RCNN Implementation',
          description: 'Image classification for game actions',
          power: ''
        },
        {
          name: 'Rally Prediction',
          description: 'Predict outcomes based on team actions',
          power: ''
        }
      ],
      description: 'Coded an RCNN that used images and annotations to identify actions in volleyball games like spiking and blocking.',
      empty: false
    },
    {
      id: 'database_project',
      title: 'Courtroom Simulation',
      subtitle: 'Database Project',
      type: 'Project',
      hp: '2024',
      hpLabel: 'Dec',
      icon: Database,
      bgColor: '#DC2626', // Solid red
      borderColor: '#FCD34D',
      moves: [
        {
          name: 'CRUD Operations',
          description: 'Simulate court environments',
          power: ''
        },
        {
          name: 'Django Backend',
          description: 'Real-time frontend-backend updates',
          power: ''
        }
      ],
      description: 'Built a courtroom simulation with Python and SQL, using Django for real-time web updates.',
      empty: false
    },
    {
      id: 'graphics_project',
      title: 'Graphics Application',
      subtitle: 'C Programming',
      type: 'Project',
      hp: '2023',
      hpLabel: 'June',
      icon: Monitor,
      bgColor: '#EA580C', // Solid orange
      borderColor: '#FCD34D',
      moves: [
        {
          name: '3D Rendering',
          description: 'Render models and draw 2D/3D lines',
          power: ''
        },
        {
          name: 'Mesh Import',
          description: 'Textures and animation support',
          power: ''
        }
      ],
      description: 'Created a computer graphics application in C that renders 3D models with textures and animations.',
      empty: false
    },
    {
      id: 'consulting',
      title: 'NExT Consulting',
      subtitle: 'Software Engineering',
      type: 'Experience',
      hp: '2025',
      hpLabel: 'Current',
      icon: Briefcase,
      bgColor: '#0891B2', // Solid cyan
      borderColor: '#FCD34D',
      moves: [
        {
          name: 'Client Solutions',
          description: 'Architect and ship products',
          power: ''
        },
        {
          name: 'AGILE Development',
          description: 'Start-to-finish products',
          power: ''
        }
      ],
      description: 'Software Engineering Consultant architecting and developing products for clients through AGILE sprints.',
      empty: false
    },
    {
      id: 'teaching',
      title: 'Teaching Assistant',
      subtitle: 'Northeastern University',
      type: 'Experience',
      hp: '2025',
      hpLabel: 'Spring',
      icon: GraduationCap,
      bgColor: '#0D9488', // Solid teal
      borderColor: '#FCD34D',
      moves: [
        {
          name: 'CS3200 Databases',
          description: 'Grade, proctor, assist students',
          power: ''
        },
        {
          name: 'Student Support',
          description: 'Part-time teaching role',
          power: ''
        }
      ],
      description: 'Teaching Assistant for Introduction to Databases course, helping students master database concepts.',
      empty: false
    },
    {
      id: 'education',
      title: 'Northeastern',
      subtitle: 'Khoury College',
      type: 'Education',
      hp: '3.80',
      hpLabel: 'GPA',
      icon: GraduationCap,
      bgColor: '#B91C1C', // Solid dark red
      borderColor: '#FCD34D',
      moves: [
        {
          name: 'Dean\'s List',
          description: 'Fall 2024 - Spring 2025',
          power: ''
        },
        {
          name: 'Foundations of AI',
          description: 'Graduate-level coursework',
          power: ''
        }
      ],
      description: 'B.S. in Computer Science and Political Science. Relevant coursework includes AI, Algorithms, OOD, and Databases.',
      empty: false
    }
  ];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleBinderClick = () => {
    setIsOpen(true);
  };

  const handleCloseBinder = () => {
    setIsOpen(false);
    setSelectedCard(null);
  };

  const handleCardClick = (card: any) => {
    setSelectedCard(card);
  };

  const handleBackToCards = () => {
    setSelectedCard(null);
  };

  const pageThemes = [
  "Profile & Skills",
  "Projects",
  "Experience",
  "Education",
  "Empty Slots"
];

const totalPages = pageThemes.length;

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

    const pageTypeMapping: Record<string, string[]> = {
    "Profile & Skills": ["Profile", "Technical"],
    "Projects": ["Project"],
    "Experience": ["Experience"],
    "Education": ["Education"],
    "Empty Slots": []
    };


    const currentTheme = pageThemes[currentPage] || "Miscellaneous";
    const themeTypes = pageTypeMapping[currentTheme] || [];

    // Get matching cards by type
    let currentCards = portfolioCards.filter((card) =>
    themeTypes.includes(card.type)
    );

    // Fill with empty slots up to 8
    while (currentCards.length < CARDS_PER_PAGE) {
        currentCards.push({ id: `empty-${currentCards.length}`, title: 'Empty Slot', subtitle: '', type: 'Empty', hp: '', hpLabel: '', icon: FileText, bgColor: '#E5E7EB', borderColor: '#D1D5DB', moves: [], description: 'This slot is available for future projects or experiences.', empty: true });
    }

    const leftPageCards = currentCards.slice(0, 4);
    const rightPageCards = currentCards.slice(4, 8);


  const renderPortfolioCard = (card: any, isLarge: boolean = false) => {
    if (card.empty) {
        return (
            <div className="w-44 h-64 text-xs relative rounded-xl border-8 border-dashed opacity-20" />
        );
    }

    const sizeClasses = isLarge 
      ? "w-96 h-[520px] text-base" 
      : "w-44 h-64 text-xs";
    
    const IconComponent = card.icon;
    
    return (
      <div 
        className={`${sizeClasses} relative rounded-xl border-8 shadow-2xl whitespace-nowrap overflow-hidden text-ellipsis`}
        style={{
          borderColor: '#d2ae39ff',
          backgroundColor: card.borderColor
        }}
      >
        {/* Card Header */}
        <div 
          className="p-3 relative"
          style={{ backgroundColor: card.borderColor }}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className={`text-gray-600 ${isLarge ? 'text-sm' : 'text-[8px]'}`}>
                {card.subtitle}
              </p>
              <h3 className={`font-bold text-gray-800 ${isLarge ? 'text-lg' : 'text-[12px]'}`}>
                {card.title}
              </h3>
            </div>
            <div className="flex items-center gap-1 absolute top-2 right-2">
                <span className={`font-semibold text-gray-700 ${isLarge ? 'text-sm' : 'text-[8px]'}`}>
                  {card.hpLabel}
                </span>
                <span className={`font-bold text-red-600 ${isLarge ? 'text-3xl' : 'text-md'}`}>
                  {card.hp}
                </span>
            </div>
          </div>
        </div>

        {/* Icon/Image Area */}
        <div className="relative bg-white/20 backdrop-blur-sm border-3 border-gray-300" 
             style={{ height: isLarge ? '140px' : '70px',
                backgroundColor: card.bgColor
              }}>
          <div className="w-full h-full flex items-center justify-center">
            <IconComponent className={`${isLarge ? 'w-20 h-20' : 'w-10 h-10'} text-white/80`} />
          </div>
        </div>

        {/* Description */}
        {isLarge && (
          <div className="px-4 py-2">
            <p className="text-black/90 text-sm leading-tight whitespace-normal">
              {card.description}
            </p>
          </div>
        )}

        {/* Moves/Skills Section */}
        <div className={`px-3 ${isLarge ? 'py-3 space-y-2' : 'py-0'}`}>
          {card.moves.map((move: any, idx: number) => (
            <div key={idx} className="rounded-lg p-2">
              <div className="flex justify-between items-start">
                <div className="flex-1 min-w-0">
                  <div className={`font-bold text-black ${isLarge ? 'text-base' : 'text-xs'}`}>
                    {move.name}
                  </div>
                  <div className={`text-black/80 ${isLarge ? 'text-xs' : 'text-[8px]'} mt-1 truncate`}>
                    {move.description}
                  </div>
               </div>
               {isLarge && (
                    <div className={`text-black-300 ${isLarge ? 'text-sm' : 'text-[10px]'} ml-2 whitespace-nowrap`}>
                        {move.power}
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>


        {/* Card Bottom Info */}
        {isLarge && card.details && (
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-xs border border-white/20">
              <div className="flex flex-wrap gap-2 text-white/90">
                {Object.entries(card.details).map(([key, value]) => (
                  <span key={key} className="capitalize">
                    {key}: {value as string}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-amber-50 flex items-center justify-center p-4">
      <div className="relative">
        {!isOpen ? (
          /* Closed Half-Binder */
          <div 
            onClick={handleBinderClick}
            className="cursor-pointer transform hover:scale-105 transition-all duration-500"
          >
            <div className="w-[500px] h-[600px] relative">
              {/* Binder Cover */}
              <div className="absolute inset-0 bg-purple-300 rounded-r-xl shadow-2xl">
                {/* Binder Rings on Left Edge */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-8">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 -ml-4">
                      <div className="w-8 h-8 bg-gray-400 rounded-full shadow-xl border-2 border-gray-200"></div>
                    </div>
                  ))}
                </div>
                
                {/* Portfolio Preview Window */}
                <div className="absolute inset-8 bg-purple-100 rounded-lg shadow-inner p-6 flex flex-col items-center justify-center">
                  <div className="text-gray-700 mb-4 text-lg font-bold">PORTFOLIO</div>
                  
                  {/* Headshot Placeholder */}
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center shadow-inner">
                    <User className="w-16 h-16 text-gray-500" />
                  </div>
                  
                  <div className="mt-4 text-center">
                    <div className="text-gray-800 font-semibold">Ethan Wong</div>
                    <div className="text-gray-600 text-sm">CS & Political Science</div>
                  </div>
                  
                  <div className="text-purple-600 mt-4 text-sm font-medium italic">Click to Open</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Open Binder */
          <div className="w-full max-w-7xl">
            <div className="text-center text-lg font-bold text-gray-700 mb-4">
                {pageThemes[currentPage] || "Miscellaneous"}
            </div>
            {selectedCard !== null ? (
              /* Individual Card View */
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={handleBackToCards}
                    className="text-purple-600 hover:text-purple-700 flex items-center gap-2 transition-colors font-medium"
                  >
                    ← Back to Portfolio
                  </button>
                  <button
                    onClick={handleCloseBinder}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Close Binder
                  </button>
                </div>

                <div className="flex justify-center">
                  {renderPortfolioCard(selectedCard, true)}
                </div>
              </div>
            ) : (
              /* Cards Grid View */
              <div className="p-8">
                <div className="fixed top-[200px] right-[620px] z-10 mb-[20px]">
                  <button
                    onClick={handleCloseBinder}
                    className="text-gray-500 hover:text-gray-700 transition-colors px-4 py-2 font-medium"
                  >
                    Close Binder
                  </button>
                </div>
                
                {/* Binder Pages Layout */}
                <div className="bg-purple-300 rounded-xl p-6 shadow-inner relative">
                <div className="grid grid-cols-2 gap-8">
                    {/* Left Page */}
                    <div className="bg-white/40 rounded-lg p-4 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-4">
                        {leftPageCards.map((card) => (
                            <div
                                key={card.id}
                                onClick={() => !card.empty && handleCardClick(card)}
                                className={`cursor-pointer transform transition-all duration-300 hover:z-10 ${
                                card.empty ? "" : "hover:scale-105"
                                }`}
                        >
                            <div className="p-2">{renderPortfolioCard(card, false)}</div>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Right Page */}
                    <div className="bg-white/40 rounded-lg p-4 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-4">
                        {rightPageCards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => handleCardClick(card)}
                            className="cursor-pointer transform hover:scale-105 transition-all duration-300 hover:z-10"
                        >
                            <div className="p-2">{renderPortfolioCard(card, false)}</div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Binder Rings in Center */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-24 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-12 h-12">
                        <div className="w-12 h-12 bg-gray-400 rounded-full shadow-xl border-4 border-gray-200"></div>
                    </div>
                    ))}
                </div>
                </div>
              </div>
            )}
          </div>
        )}
        {/* Page Navigation Buttons */}
        {isOpen && (
        <div className="flex justify-center gap-6 mt-6">
            {currentPage > 0 && (
            <button
                onClick={handlePrevPage}
                className="px-6 py-2 rounded-full bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700 transition"
            >
                ← Previous Page
            </button>
            )}
            {currentPage < totalPages - 1 && (
            <button
                onClick={handleNextPage}
                className="px-6 py-2 rounded-full bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700 transition"
            >
                Next Page →
            </button>
            )}
        </div>
        )}
      </div>
    </div>
  );
}