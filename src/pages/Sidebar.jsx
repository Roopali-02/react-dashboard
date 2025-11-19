import React from 'react'
import {
	Drawer,
	Typography,
	List,
	ListItem,
	ListItemButton,
} from "@mui/material";

import dumbells from "../assets/dumbells.png";

import workout from "../assets/workout.png";
import plan from "../assets/plan.png";
import goals from "../assets/goals.png";
import overview from "../assets/overview.png";
import calendar from "../assets/calendar.png";
import progress from "../assets/progress.png";
import help from "../assets/help.png";
import logout from "../assets/logout.png";

const Sidebar = ({active, setActive}) => {
	const menuItems = [
		{ label: "Overview", src: overview },
		{ label: "Workout", src: workout },
		{ label: "Diet Plan", src:plan },
		{ label: "Goals", src: goals},
		{ label: "My Schedule", src: calendar},
		{ label: "Progress", src: progress },
	];
	
	const bottomMenu = [
		{ label: "Help", src: help },
		{ label: "Logout", src: logout },
	];

	const SIDEBAR_WIDTH = 240;

	return (
			<div
				style={{ width: SIDEBAR_WIDTH }}
				className="hidden lg:flex flex-col h-full border-r border-slate-100 bg-white"
				>
					<div 
						className="flex items-center justify-center gap-2 px-8 py-6 border-b border-b-[#CBD5E1]">
						<span className="font-manrope font-extrabold text-[18px] leading-[22px] tracking-[0] text-[#F97316]">Fitness</span>
						<img src={dumbells} alt="dumbells"  />
					</div>

					<nav className="flex-1">
						<List>
							{menuItems.map((item) => (
							<ListItem key={item.label} >
								<ListItemButton 
									className="mx-3 my-1 rounded-xl flex items-center gap-3" 
									onClick={() => setActive(item.label)}
									sx={{
										borderRadius: "8px",
										backgroundColor: active === item.label ? "#FC6212" : "transparent",
										"&:hover": {
											backgroundColor: active === item.label ? "#FC6212" : "transparent",
										},
										 py: "14px", 
									}}
							 >
								 <img
									src={item.src}
									alt={item.label}
									className="w-5 h-5 object-contain"
									style={{
										filter: active === item.label ? "brightness(0) invert(1)" : "none",
									}}
								/>
								<Typography
									sx={{
										fontFamily: "Manrope",
										fontWeight: 600,
										fontSize: "14px",
										lineHeight: "100%",
										letterSpacing: "0",
										color: active === item.label ? "#FFFFFF" : "#475569",
									}}
								>
									{item.label}
								</Typography>
						    </ListItemButton>
							</ListItem>
		       ))}
						</List>
					</nav>

					<div className="pb-6">
						<List>
							{bottomMenu.map((item) => (
								<ListItem key={item.label}>
									<ListItemButton className="rounded-xl flex items-center gap-3">
										<img
											src={item.src}
											alt={item.label}
											className="w-5 h-5 object-contain"
											style={{
												filter: active === item.label ? "brightness(0) invert(1)" : "none",
											}}
										/>
											<Typography
									    sx={{
												fontFamily: "Manrope",
												fontWeight: 600,
												fontSize: "14px",
												lineHeight: "100%",
												letterSpacing: "0",
												color: active === item.label ? "#FFFFFF" : "#475569",
											}}
										>
									{item.label}
								</Typography>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</div>
					</div>
				
	)
}

export default Sidebar