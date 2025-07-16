
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Search, Home, Mail, Bell, User, Plus, Eye, Download, Clock, MapPin, Star, Calendar, ExternalLink, Share2, Heart, Bookmark, MessageCircle, CheckCircle, Award, GraduationCap, Briefcase, ChevronDown, Edit, Lock } from 'lucide-react';
import logo1 from '../image/logo1.svg';
import boy1 from '../image/boy1.png';

const CandidateDetails = () => {
  const { jobId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - Full Width */}
      <header className="bg-white border-b border-gray-200 h-auto md:h-[78px] relative px-2 sm:px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between h-full gap-2 md:gap-0 py-2 md:py-0">
          <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-0">
            <img
              src={logo1}
              alt="Company Logo"
              className="w-[36px] h-[28px] md:w-[46px] md:h-[32px] object-contain"
            />
          </div>

          <div className="w-full md:w-[655px] h-[40px] md:h-[52px] border border-gray-300 rounded-[28px] px-4 md:px-[23px] py-2 md:py-[16px] flex items-center gap-2 md:gap-[10px] mb-2 md:mb-0">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for people or company"
              className="flex-1 bg-transparent outline-none text-xs md:text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="flex items-center space-x-4 md:space-x-8 m-2 md:m-4">
            <Home className="w-5 h-5 text-gray-400" />
            <Mail className="w-5 h-5 text-gray-400" />
            <Bell className="w-5 h-5 text-gray-400" />
            <User className="w-5 h-5 text-gray-400" />
            <button className="w-[120px] md:w-[170px] h-[40px] md:h-[52px] rounded-full px-4 md:px-[23px] py-2 md:py-[16px] bg-green-500 text-white text-xs md:text-base font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create a Job</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content Area with Sidebar */}
      <div className="flex flex-col md:flex-row h-auto md:h-[calc(100vh-78px)] flex-1">
        {/* Left Sidebar */}
        <div className="w-full md:w-[430px] bg-white border-r border-gray-200 flex flex-col">
          {/* Back to Dashboard Header */}
          <div className="px-4 md:px-[24px] py-2 md:py-[8px] border-b border-gray-200">
            <Link to="/" className="flex items-center space-x-2 md:space-x-[12px] text-gray-700 hover:text-gray-900 transition-colors">
              <div className="w-8 h-8 md:w-[32px] md:h-[32px] bg-black rounded-full flex items-center justify-center">
                <ArrowLeft className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs md:text-[14px] font-medium text-gray-900">Back to Dashboard</span>
            </Link>
          </div>

          {/* Job Info Card */}
          <div className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-200 bg-[#F8F9FA]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2 gap-2">
              <div>
                <h2 className="text-base md:text-[16px] font-semibold text-gray-900">Senior Product Designer</h2>
                <p className="text-xs md:text-[12px] text-gray-500 mt-1">Posted 3 Days Ago • Bengaluru, India</p>
                <p className="text-xs md:text-[12px] text-gray-400 mt-1 flex items-center gap-2">
                  <Clock className="w-4 h-4 inline-block text-gray-400" /> Active until Jan 31, 2026
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button className="flex items-center gap-1 px-2 md:px-3 py-1 border border-gray-300 rounded text-xs text-gray-700 hover:bg-gray-100">
                  <User className="w-4 h-4" /> Add team member
                </button>
                <button className="flex items-center gap-1 px-2 md:px-3 py-1 border border-gray-300 rounded text-xs text-gray-700 hover:bg-gray-100">
                  <Edit className="w-4 h-4" /> Edit Job
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1 text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">
                <Star className="w-4 h-4 text-yellow-500" /> 4/5 Reveals Left
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="px-4 md:px-6 py-2 md:py-3 border-b border-gray-200 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              <button className="text-xs md:text-[15px] font-medium text-green-600 border-b-2 border-green-600 pb-2 bg-[#EEEEEE]">All</button>
              <button className="text-xs md:text-[15px] font-medium text-gray-500 hover:text-gray-700 pb-2">Unlocked</button>
              <button className="text-xs md:text-[15px] font-medium text-gray-500 hover:text-gray-700 pb-2">Interviewing</button>
              <button className="text-xs md:text-[15px] font-medium text-gray-500 hover:text-gray-700 pb-2">Accepted</button>
              <button className="text-xs md:text-[15px] font-medium text-gray-500 hover:text-gray-700 pb-2">Rejected</button>
              <button className="text-xs md:text-[15px] font-medium text-gray-500 hover:text-gray-700 pb-2">Saved</button>
            </div>
          </div>

          {/* Search and Sort Section */}
          <div className="px-4 md:px-6 py-2 md:py-3 border-b border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Candidate"
                className="w-full h-[36px] md:h-[40px] pl-10 pr-4 border border-gray-300 rounded-[8px] focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-xs md:text-[14px] bg-white"
              />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-500">Sort by</span>
              <select className="text-xs border border-gray-300 rounded px-2 py-1 bg-white">
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>

          {/* Candidate List */}
          <div className="flex-1 px-2 md:px-6 py-2 md:py-4 min-h-0 overflow-y-auto">
            <div className="space-y-3 md:space-y-4">
              {/* Candidate Card Example */}
              <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500 font-medium">Profile Locked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-yellow-500"><Star className="w-4 h-4" /></button>
                    <button className="text-gray-400 hover:text-gray-600"><Share2 className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3 mt-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img src={boy1} alt="Candidate" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-xs md:text-sm">Pritesh Srivastava</p>
                    <p className="text-xs text-gray-500">Bengaluru, India • 8 Years of Exp</p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="text-xs text-gray-500 mb-1">Recent Experience</div>
                  <div className="font-medium text-gray-800 text-xs">Lead Designer - Lollypop Designs</div>
                  <div className="text-xs text-gray-400">Jan 2022 - Present • 2 years 8 months</div>
                </div>
                <div className="mt-2">
                  <div className="text-xs text-gray-500 mb-1">Education</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-medium">Visual Design</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-[10px] font-medium">Prototyping</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-[10px] font-medium">Problem Solving</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-medium">+3</span>
                  </div>
                  <div className="text-xs text-gray-700 mt-1">MA, Graphic Design • Kingston University London • 2022</div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-400">Applied 2 Days Ago</span>
                  <button className="text-xs bg-gray-100 border border-gray-300 rounded px-3 py-1 font-medium hover:bg-gray-200 w-full sm:w-auto">Reveal Profile</button>
                </div>
              </div>
              {/* Repeat for more candidates as needed */}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Main Content Area */}
          <div className="flex-1 p-2 md:p-5">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Navigation */}
              <nav className="flex space-x-2 md:space-x-8 px-2 md:px-6 border-b border-gray-200 overflow-x-auto">
                <button className="py-2 md:py-4 text-green-600 border-b-2 border-green-600 font-medium text-xs md:text-base">Resume</button>
                <button className="py-2 md:py-4 text-gray-500 hover:text-gray-700 text-xs md:text-base">Screening Questions</button>
                <button className="py-2 md:py-4 text-gray-500 hover:text-gray-700 text-xs md:text-base">Message</button>
                <button className="py-2 md:py-4 text-gray-500 hover:text-gray-700 text-xs md:text-base">Notes</button>
                <button className="py-2 md:py-4 text-gray-500 hover:text-gray-700 text-xs md:text-base">Schedule</button>
              </nav>

              {/* Resume Header & Actions */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-2 md:px-6 pt-4 md:pt-6 pb-2 border-b border-gray-100 gap-2">
                <div>
                  <h3 className="font-semibold text-gray-900 text-base md:text-lg">Candidate's Resume</h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">Last updated May 2024</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button className="flex items-center gap-1 px-2 md:px-3 py-1 border border-gray-300 rounded text-xs text-gray-700 bg-white hover:bg-gray-100">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-1"></span> Not a Good Fit
                  </button>
                  <button className="flex items-center gap-1 px-2 md:px-3 py-1 border border-green-500 rounded text-xs text-green-700 bg-green-50 hover:bg-green-100">
                    <CheckCircle className="w-4 h-4 text-green-500" /> Good Fit
                  </button>
                  <button className="text-gray-400 hover:text-green-600"><Download className="w-4 h-4" /></button>
                  <button className="text-gray-400 hover:text-green-600"><Share2 className="w-4 h-4" /></button>
                  <button className="text-gray-400 hover:text-green-600"><Calendar className="w-4 h-4" /></button>
                  <button className="ml-0 md:ml-2 px-2 md:px-3 py-1 border border-gray-300 rounded text-xs text-gray-700 bg-white hover:bg-gray-100">Send Calendar Invite</button>
                </div>
              </div>

              {/* Resume Content */}
              <div className="p-2 md:p-6">
                {/* Candidate Info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 bg-gray-200">
                    <img src={boy1} alt="Candidate" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h1 className="text-lg md:text-2xl font-bold text-gray-900">Pritesh Srivastava</h1>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-xs md:text-gray-600 mb-2">Bengaluru, India • 8 Years of Exp</p>
                    <div className="mb-2">
                      <div className="text-xs text-gray-500 mb-1">Skills</div>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Visual Design</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Prototyping</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Problem Solving</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Information Architecture</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Business Strategy</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Figma</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Section */}
                <div className="mb-4 md:mb-6">
                  <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Recent Experience</div>
                  <div className="mb-3 md:mb-4">
                    <div className="font-medium text-gray-800 text-xs md:text-base">Lead Designer Lollypop Designs</div>
                    <div className="text-xs text-gray-500 mb-1">Jan 2022 - Present • 2 years 8 months • Bengaluru, India</div>
                    <div className="text-xs text-gray-600">Developed a successful, scalable pallet-less shooting experience in collaboration with product managers, coaches, and athletes. Also, recognised by Enable India, a non-profit organisation that has been empowering people with disabilities.</div>
                  </div>
                  <div className="mb-3 md:mb-4">
                    <div className="font-medium text-gray-800 text-xs md:text-base">Intern Designer Santander Bank</div>
                    <div className="text-xs text-gray-500 mb-1">Jan 2021 - Mar 2021 • 3 months • London, UK</div>
                    <div className="text-xs text-gray-600">Developed a successful, scalable pallet-less shooting experience in collaboration with product managers, coaches, and athletes. Also, recognised by Enable India, a non-profit organisation that has been empowering people with disabilities.</div>
                  </div>
                  <button className="text-xs text-green-600 bg-green-50 border border-green-200 rounded px-3 py-1 font-medium hover:bg-green-100">+ 3 More</button>
                </div>

                {/* Education Section */}
                <div className="mb-4 md:mb-6">
                  <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Education</div>
                  <div className="mb-3 md:mb-4">
                    <div className="font-medium text-gray-800 text-xs md:text-base">MA, Graphic Design Kingston University</div>
                    <div className="text-xs text-gray-500 mb-1">Jan 2022 - Sep 2023 • London, UK</div>
                    <div className="text-xs text-gray-600">Developed a successful, scalable pallet-less shooting experience in collaboration with product managers, coaches, and athletes. Also, recognised by Enable India, a non-profit organisation that has been empowering people with disabilities.</div>
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="mb-4 md:mb-6">
                  <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Achievements</div>
                  <div className="mb-3 md:mb-4">
                    <div className="font-medium text-gray-800 text-xs md:text-base">Course Leader Kingston University</div>
                    <div className="text-xs text-gray-500 mb-1">Jan 2022 - Sep 2023 • London, UK</div>
                    <div className="text-xs text-gray-600">Developed a successful, scalable pallet-less shooting experience in collaboration with product managers, coaches, and athletes.</div>
                  </div>
                </div>

                {/* Languages Known */}
                <div className="mb-2">
                  <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Languages Known</div>
                  <div className="flex gap-1 md:gap-2 flex-wrap">
                    <span className="bg-gray-100 text-gray-700 px-3 md:px-4 py-1 rounded text-xs">Hindi</span>
                    <span className="bg-gray-100 text-gray-700 px-3 md:px-4 py-1 rounded text-xs">Telugu</span>
                    <span className="bg-gray-100 text-gray-700 px-3 md:px-4 py-1 rounded text-xs">English</span>
                    <span className="bg-gray-100 text-gray-700 px-3 md:px-4 py-1 rounded text-xs">German</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;