import React,{useState} from 'react'
import {
	Drawer,
	Typography,
	List,
	ListItem,
	ListItemButton,
} from "@mui/material";
import Sidebar from '../pages/Sidebar';

import Banner from "../assets/Banner.png";
import stepsCard from "../assets/stepsCard.png";
import caloriesCard from "../assets/caloriesCard.png";
import workoutCard from "../assets/workoutCard.png";
import graph from "../assets/graph.png";

import stretch from "../assets/stretch.png";
import backStretch from "../assets/backstretch.png";
import yoga from "../assets/yoga.png";
import burger from "../assets/burger.png";
import buritto from "../assets/buritto.png";
import premiumCard from "../assets/premiumCard.png"; 
import dumbells from "../assets/dumbells.png";

import {DashboardOutlined,FitnessCenter,RestaurantMenu,EmojiEventsOutlined,EventNoteOutlined,TrendingUpOutlined,HelpOutline,Logout} from '@mui/icons-material';

import Navbar from '../pages/Navbar';


const menuItems = [
	{ label: "Overview", icon: <DashboardOutlined /> },
	{ label: "Workout", icon: <FitnessCenter /> },
	{ label: "Diet Plan", icon: <RestaurantMenu /> },
	{ label: "Goals", icon: <EmojiEventsOutlined /> },
	{ label: "My Schedule", icon: <EventNoteOutlined /> },
	{ label: "Progress", icon: <TrendingUpOutlined /> },
];

const bottomMenu = [
	{ label: "Help", icon: <HelpOutline /> },
	{ label: "Logout", icon: <Logout /> },
];

const SIDEBAR_WIDTH = 240;

const Dashboard = () => {
	const [active, setActive] = useState(menuItems[0].label);
  const [mobileOpen, setMobileOpen] = useState(false);

	const scheduleCards = [
		{day:'Monday',src:stretch,badge:'20 Sets'},
	  {day:'Tuesday',src:backStretch,badge:'10 Round'},
		{day:'Wednesday',src:yoga,badge:'20 Min'},
  ]

	return (
		<div className="min-h-screen bg-slate-50 flex items-start justify-center">
			<div className="bg-white rounded-lg shadow-sm w-full flex h-screen">
				{/* MOBILE DRAWER */}
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={() => setMobileOpen(false)}
					ModalProps={{ keepMounted: true }}
					sx={{
						display: { xs: "block", lg: "none" },
						"& .MuiDrawer-paper": {
							width: SIDEBAR_WIDTH,
						}
					}}
				>
					<div className="bg-white h-full flex flex-col border-r">
					<div className="flex items-center justify-center gap-2 text-orange-500 px-8 py-6.5  font-bold text-lg border-b border-b-[#CBD5E1]">
					<span>Fitness</span>
					<img src={dumbells} alt="dumbells"  />
					</div>

					<nav className="flex-1">
						<List>
							{menuItems.map((item) => (
							<ListItem key={item.label}>
								<ListItemButton className="mx-3 my-1 rounded-xl flex items-center gap-3" onClick={() => setActive(item.label)}
								sx={{
							     backgroundColor: active === item.label ? "#FC6212" : "transparent", 
						    }}
								>
									<div 
									className="text-slate-500"
									style={{color: active === item.label ? "#FFFFFF" : "#64748B",
									display: "flex",
									alignItems: "center",
							  }}
									>{item.icon}</div>
								<Typography
									variant="body1"
									sx={{ color: active === item.label ? "#FFFFFF" : "#333", fontWeight: 500,fontSize:'15px' }} 
									>
										{item.label}
									</Typography>
								</ListItemButton>
							</ListItem>
						))}
						</List>
					</nav>

					<div className="px-4 pb-6">
						<List>
							{bottomMenu.map((item) => (
								<ListItem key={item.label}>
									<ListItemButton className="rounded-xl flex items-center gap-3">
										<div className="text-slate-500">{item.icon}</div>
										<Typography
											variant="body1"
											sx={{ color: "#333", fontWeight: 500,fontSize:'15px' }} 
										>
											{item.label}
										</Typography>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</div>
					</div>
				</Drawer>

				{/* LEFT SIDEBAR */}
				<Sidebar active={active} setActive={setActive}/>

				{/* MAIN AREA (includes header + content + right panel) */}
				<div className="flex-1 min-h-[720px] flex flex-col bg-white">

					{/* TOP NAVBAR */}
					<Navbar setMobileOpen={setMobileOpen}/>

					{/* PAGE CONTENT - two column layout */}
					<div className="flex-1 p-6 overflow-auto bg-[#F5F7FB]">
						<div className="flex flex-col lg:flex-row gap-6">
							{/* LEFT CONTENT COLUMN */}
							<div className="flex-1 space-y-4">
								{/* Banner */}
							 <div className="rounded-xl overflow-hidden shadow-sm">
									<img src={Banner} alt="Banner" className="w-full h-auto" />
								</div>
								{/* Colored small cards row */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								<img src={workoutCard} className="rounded-xl shadow-sm w-full" />
								<img src={caloriesCard} className="rounded-xl shadow-sm w-full" />
								<img src={stepsCard} className="rounded-xl shadow-sm w-full" />
							</div>

							{/* Chart card placeholder */}
							<img src={graph} alt="Chart" className="w-full h-auto" />

								{/* Table placeholder */}
								<div className="grid grid-cols-5 md:px-12 text-bold-14">
									<div>Food</div>
									<div>Meal</div>
									<div>Calories</div>
									<div>Priorities</div>
									<div>Carbs</div>
								</div>
								
                {/* Burrito & Burger rows */}
							 <div className="p-2">
								{Array.from({ length: 2 }).map((_, i) => (
									<div className="overflow-x-auto w-full" key={i}>
										<div 
											className="w-full grid grid-cols-5 items-center px-0 md:px-10 py-2 bg-white mb-4 text-[14px] leading-[100%] font-medium"
											style={{ color: "#475569", fontFamily: "Manrope" }}
										>
											<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
												<img src={i===0?buritto:burger} className="w-10 h-10" />
												<div className="font-bold text-[#475569] text-[14px] leading-[100%] truncate">
												{i===0?'Burrito':'Burger'}
												</div>
											</div>
											<div className="">Pizza Burger</div>
											<div className="">Receiving</div>
											<div className="">01:00 AM</div>
											<div className="">20 gm</div>
										</div>
									</div>
									))}
               </div>

							</div>

							{/* RIGHT PANEL */}
							<div 
								className="flex flex-col w-full lg:w-[320px] shrink-0"
							>
								<div className="flex justify-between items-center mb-8">
									<Typography 
                    sx={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: '20px', color: '#475569',lineHeight: '100%'  }}
                  >
										My Schedule
									</Typography>
									<button className="font-manrope font-medium text-[14px] leading-none text-orange-500">
                  `{`View All >`}
                  </button>
								</div>
								<div className="space-y-4">

                  {
										scheduleCards.map((card,i)=>(
										<div className="bg-white rounded-md p-3 flex flex-col justify-between" key={i}>
											<div>
												<p
													className="text-[18px] leading-[100%] tracking-[-0.006em] font-medium"
													style={{ color: "#475569", fontFamily: "Manrope" }}
												>
													{card.day}
												</p>
											</div>
										<div className="flex items-center justify-between gap-3 mt-2">
										  <div className='flex gap-x-2'>
                        <img src={card.src} className="w-10 h-10" />
											<div>
												<div 
												   className="text-[14px] leading-[100%] tracking-[-0.006em] font-medium"
                           style={{ color: "#1E293B", fontFamily: "Manrope" }}
												>
												{i===0?'Stretch':i===1?'Back Stretch':'Yoga'}
												</div>
												<div
													className="text-[12px] leading-[100%] tracking-[-0.006em] font-normal mt-2"
													style={{ color: "#475569", fontFamily: "Manrope" }}
												>At 08:00</div>
											</div>
											</div>
	
										<div 
											className="text-[12px] leading-[100%] font-medium px-3 py-1 rounded-full bg-orange-50"
                      style={{ color: "#F97316", fontFamily: "Manrope" }}
											>
											{card.badge}
										</div>
										</div>
									</div>
										))
									}
								</div>
								
								 {/*  Goals Section */}
								 <div className="flex justify-between items-center my-10">
										<Typography 
                    sx={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: '20px', color: '#475569',lineHeight: '100%'}}
                    >
										Goals
									</Typography>
									<button className="font-manrope font-medium text-[14px] leading-none text-orange-500">
                  `{`View All >`}
                  </button>
								 </div>

									<div className="space-y-4">
										{Array.from({ length: 2 }).map((_, i) => (
											<div className="bg-white rounded-md p-3 flex justify-between items-center" key={i}>
											  <div className=''>
													<div 
													className="text-[14px] leading-[100%] tracking-[-0.006em] font-medium"
													style={{ color: "#1E293B", fontFamily: "Manrope" }}
												>
												{i===0?'ABS & Stretch':'Push Up'}
												</div>
												<div 
													className="text-[12px] leading-[100%] tracking-[-0.006em] font-normal mt-3"
													style={{ color: "#475569", fontFamily: "Manrope" }}
												>
												{i===0?'Saturday, April 14 | 08:00 AM':'Sunday, April 15 | 08:00 AM'}
												</div>
												</div>
											
												<div>
                          <div 
													className="text-[12px] leading-[100%] font-medium px-3 py-1 rounded-full bg-orange-50"
													style={{ color: "#F97316", fontFamily: "Manrope" }}
											    >
											    {i===0?'30 Min/day':'50 Sets/day'}
										      </div>
												</div>
									   </div>
									))}
									</div>
								
                  {/*  Premium Card */}
								<div className="w-full rounded-xl overflow-hidden mt-10">
									<img 
										src={premiumCard} 
										alt="Premium Membership"
										className="w-full h-auto block"
									/>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Dashboard