
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, Mail, Bell, User, Plus, Edit, MoreHorizontal, ChevronDown } from 'lucide-react';
import logo3 from '../image/logo3.png';
import black from '../image/black.png';
import logo1 from '../image/logo1.svg';
import boy1 from '../image/boy1.png';
import girl1 from '../image/girl1.png';

const Dashboard = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Product Designer',
      posted: 'Posted 3 Days Ago',
      location: 'Bengaluru, India',
      applications: 3,
      status: 'Active Now',
      date: 'Jun 31, 2025'
    },
    {
      id: 2,
      title: 'UI/UX Design Intern',
      posted: 'Posted 8 Days Ago',
      location: 'Delhi, India',
      applications: 72,
      status: 'Active',
      date: ''
    },
    {
      id: 3,
      title: 'Senior Full Stack Developer',
      posted: 'Posted 10 Days Ago',
      location: 'Delhi, India',
      applications: 72,
      status: 'Active',
      date: ''
    }
  ];

  const interviews = [
    {
      name: 'Pritesh Srivastava',
      date: '24 May 2024 - 3:30 PM',
      avatar: boy1,
    },
    {
      name: 'Nikita Mansingha',
      date: '24 May 2024 - 3:30 PM',
      avatar: girl1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden flex flex-col">
      {/* Header */}
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
            <button className="w-[120px] md:w-[170px] h-[40px] md:h-[52px] rounded-full px-4 md:px-[23px] py-2 md:py-[16px] bg-[#B6E777] text-[#2D4232] text-xs md:text-base font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create a Job</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left Sidebar */}
        <div className="w-full lg:w-80 bg-white border-r border-gray-200 p-4 md:p-6">
          <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-5">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
              <img
                src={logo3}
                alt="Company Logo"
                className="w-full h-full object-cover object-[center_top]"
              />
            </div>
          </div>

          <div className="mb-6 md:mb-8">
            <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-1">
                  <h2 className="font-semibold text-gray-900 text-base md:text-lg">Acme Corp Ltd</h2>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-xs md:text-sm text-gray-500">@acmecorp • Bengaluru, India</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">Keep It Real.</p>

            <div className="flex space-x-3 md:space-x-6 text-xs md:text-sm">
              <div className="text-center">
                <div className="font-semibold text-gray-900">200</div>
                <div className="text-gray-500">Posts</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">380</div>
                <div className="text-gray-500">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">1003</div>
                <div className="text-gray-500">Following</div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="relative h-32 md:h-48 overflow-hidden">
              <img
                src={black}
                alt="Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 md:top-4 right-2 md:right-4 flex space-x-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <MoreHorizontal className="w-4 h-4 text-gray-600" />
                </button>
                <button className="bg-white text-gray-700 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-medium">
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="border-b border-gray-200 w-full h-[48px] md:h-[65px] opacity-100">
              <nav className="flex space-x-2 md:space-x-8 px-2 md:px-6 h-full items-center overflow-x-auto">
                <button className="text-green-600 border-b-2 border-green-600 font-medium text-xs md:text-base">
                  Dashboard
                </button>
                <button className="text-gray-500 hover:text-gray-700 text-xs md:text-base">Jobs</button>
                <button className="text-gray-500 hover:text-gray-700 text-xs md:text-base">Messages</button>
                <button className="text-gray-500 hover:text-gray-700 text-xs md:text-base">Activity</button>
                <button className="text-gray-500 hover:text-gray-700 text-xs md:text-base">Schedule</button>
                <button className="text-gray-500 hover:text-gray-700 text-xs md:text-base">Manage</button>
                <button className="text-gray-500 hover:text-gray-700 text-xs md:text-base">API</button>
                <span className="text-xs text-green-600 bg-green-100 px-2 rounded self-center">Comming Soon</span>
              </nav>
            </div>

            {/* Jobs */}
            <div className="p-2 md:p-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-2 md:mb-3 gap-2">
                <div className="flex space-x-1 md:space-x-2">
                  <button className="px-2 md:px-4 py-1 md:py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-xs md:text-base">Open</button>
                  <button className="px-2 md:px-4 py-1 md:py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-xs md:text-base">Closed</button>
                  <button className="px-2 md:px-4 py-1 md:py-2 text-gray-500 hover:bg-gray-100 rounded-lg text-xs md:text-base">Draft</button>
                </div>
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search Jobs"
                    className="pl-10 pr-4 py-1 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full md:w-64 text-xs md:text-base"
                  />
                </div>
              </div>

              <div className="space-y-2 md:space-y-4">
                {jobs.map((job) => (
                  <div key={job.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 md:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 gap-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium text-gray-900 text-xs md:text-base">{job.title}</h3>
                        <span className="text-blue-500">↗</span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500">
                        {job.posted} • {job.location}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="text-right">
                        <div className="text-xs md:text-sm text-gray-500">Active Now {job.date}</div>
                        <Link
                          to={`/applications/${job.id}`}
                          className="bg-green-100 text-green-700 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-medium hover:bg-green-200 transition-colors inline-block mt-1"
                        >
                          {job.applications} New Applications
                        </Link>
                      </div>
                      <div className="flex items-center space-x-1 md:space-x-2">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Active</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-80 p-4 md:p-6">
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <h3 className="font-medium text-gray-900 text-xs md:text-base">5/5 Reveals Left</h3>
              <button className="text-green-600 hover:text-green-700">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">Unlock 50 Resumes at ₹390</p>

            <div className="mb-4 md:mb-6">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h4 className="font-medium text-gray-900 text-xs md:text-base">Scheduled Interviews</h4>
                <button className="text-gray-400 hover:text-gray-600">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">This Week</p>

              <div className="space-y-2 md:space-y-3">
                {/* {interviews.map((interview, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{interview.name}</p>
                      <p className="text-xs text-gray-500">{interview.date}</p>
                    </div>
                  </div>
                ))} */}
                {interviews.map((interview, index) => (
                  <div key={index} className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden">
                      <img
                        src={interview.avatar}
                        alt={interview.name}
                        className="w-full h-full object-cover object-[center_top] "
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-xs md:text-sm">{interview.name}</p>
                      <p className="text-xs text-gray-500">{interview.date}</p>
                    </div>
                  </div>
                ))}


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
