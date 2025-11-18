import React,{useState} from 'react'
import {
	Drawer,
	Typography,
	List,
	ListItem,
	ListItemButton,
} from "@mui/material";

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
const RIGHT_PANEL_WIDTH = 320;

const Dashboard = () => {
	const [active, setActive] = useState(menuItems[0].label);
  const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<div className="min-h-screen bg-slate-50 flex items-start justify-center">
			<div className="bg-white rounded-lg shadow-sm w-full flex">
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
					<div className="flex items-center justify-center gap-2 text-orange-500 px-8 py-6.5  font-bold text-lg border-b-1 border-b-[#CBD5E1]">
					<span>Fitness</span>
					<img src={dumbells} alt="dumbells"  />
					</div>

					<nav className="flex-1">
						<List>
							{menuItems.map((item) => (
							<ListItem key={item.label} >
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
				<div
					style={{ width: SIDEBAR_WIDTH }}
					className="border-r border-slate-100 bg-white flex-col h-full hidden lg:flex"
				>
					<div 
					  className="flex items-center justify-center gap-2 text-orange-500 px-8 py-6.5  font-bold text-lg border-b border-b-[#CBD5E1]">
            <span>Fitness</span>
            <img src={dumbells} alt="dumbells"  />
          </div>

					<nav className="flex-1">
						<List>
							{menuItems.map((item) => (
			        <ListItem key={item.label} >
				      <ListItemButton 
							  className="mx-3 my-1 rounded-xl flex items-center gap-3" 
								onClick={() => setActive(item.label)}
				        sx={{ backgroundColor: active === item.label ? "#FC6212" : "transparent", 
               }}>
					    <div 
							   className="text-slate-500"
					       style={{
									color: active === item.label ? "#FFFFFF" : "#64748B", // white when active
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
								<div className="grid grid-cols-5 text-sm text-slate-500 font-medium px-4">
									<div>Food</div>
									<div>Meal</div>
									<div>Calories</div>
									<div>Priorities</div>
									<div>Carbs</div>
								</div>

							 <div className="p-2">
								{/* Burrito row */}
								<div className="overflow-x-auto w-full">
								<div className="min-w-[700px] grid grid-cols-5 items-center py-2 bg-white mb-4">
									<div className="flex items-center gap-3">
										<img src={buritto} className="w-10 h-10" />
										<div className="font-medium text-slate-800">Burrito</div>
									</div>
									<div className="text-slate-600">Pizza Burger</div>
									<div className="text-slate-600">Receiving</div>
									<div className="text-slate-600">01:00 AM</div>
									<div className="text-slate-600">20 gm</div>
								</div>
								</div>
							
								{/* Burger row */}
								<div className="overflow-x-auto w-full">
								<div className="min-w-[700px] grid grid-cols-5 items-center py-2 bg-white">
									<div className="flex items-center gap-3">
										<img src={burger} className="w-10 h-10" />
										<div className="font-medium text-slate-800">Burger</div>
									</div>
									<div className="text-slate-600">Pizza Burger</div>
									<div className="text-slate-600">Receiving</div>
									<div className="text-slate-600">01:00 AM</div>
									<div className="text-slate-600">20 gm</div>
								</div>
								</div>
               </div>

							</div>

							{/* RIGHT PANEL */}
							<div 
							  style={{ width: RIGHT_PANEL_WIDTH }} 
								className="flex flex-col shrink-0 w-full lg:w-[320px]"
							>
								<div className="flex justify-between items-center mb-4">
									<h2 className="text-slate-800 font-medium">My Schedule</h2>
									<button className="text-xs text-orange-500">{`View All >`}</button>
								</div>
								<div className="space-y-3">
									<div className="bg-white rounded-md p-3 flex items-center justify-between">
										<div className="flex items-center gap-3">
											<img src={stretch} className="w-10 h-10" />
											<div>
												<div className="font-medium text-slate-800">Monday</div>
												<div className="text-sm text-slate-500">Stretch • At 08:00</div>
											</div>
										</div>
										<div className="text-xs bg-orange-50 text-orange-500 px-3 py-1 rounded-full">
											20 Sets
										</div>
									</div>

								<div className="bg-white rounded-md p-3 flex items-center justify-between">
									<div className="flex items-center gap-3">
										<img src={backStretch} className="w-10 h-10" />
										<div>
											<div className="font-medium text-slate-800">Tuesday</div>
											<div className="text-sm text-slate-500">Back Stretch • At 08:00</div>
										</div>
									</div>

									<div className="text-xs bg-orange-50 text-orange-500 px-3 py-1 rounded-full">
										10 Round
									</div>
								</div>
								<div className="bg-white rounded-md p-3 flex items-center justify-between">
									<div className="flex items-center gap-3">
										<img src={yoga} className="w-10 h-10" />
										<div>
											<div className="font-medium text-slate-800">Wednesday</div>
											<div className="text-sm text-slate-500">Yoga • At 08:00</div>
										</div>
									</div>

									<div className="text-xs bg-orange-50 text-orange-500 px-3 py-1 rounded-full">
										20 min
									</div>
								</div>
								</div>
								
								 {/*  Goals Section */}
								 <div className="flex justify-between items-center my-4">
										<h2 className="text-slate-800 font-medium">Goals</h2>
										<button className="text-xs text-orange-500">{`View All >`}</button>
								 </div>
									<div className="space-y-3">
										<div className="bg-white rounded-md p-3">
											<div className="text-sm font-medium">ABS & Stretch</div>
											<div className="text-xs text-slate-500">Saturday, April 14 | 08:00 AM</div>
										</div>
										<div className="bg-white rounded-md p-3">
											<div className="text-sm font-medium">Push Up</div>
											<div className="text-xs text-slate-500">Sunday, April 15 | 08:00 AM</div>
										</div>
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