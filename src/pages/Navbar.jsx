import React from 'react'
import {
	InputAdornment ,
	TextField,
	Avatar
} from "@mui/material";
import avatar from "../assets/avatar.png";

import {Notifications,Settings,Search,Menu} from '@mui/icons-material';
const Navbar = ({setMobileOpen}) => {
	return (
	 <div className="border-b border-slate-100">
			<div className="flex items-center justify-between px-8 py-4 border-b-2 border-b-[#CBD5E1]">
				<button
					className="lg:hidden mr-3"
					onClick={() => setMobileOpen(true)}
				>
					<Menu className="text-slate-600" />
				</button>
				<div className="hidden lg:block">
					<div 
					  className="text-[10px] leading-[100%] font-normal"
            style={{ color: "#64748B", fontFamily: "Manrope" }}
					>
						Good Morning
					</div>
					<div 
					  clasNames="text-[16px] leading-[100%] font-semibold mt-2"
            style={{ color: "#475569", fontFamily: "Manrope" }}
					>
					Welcome Back!
					</div>
				</div>
				<div className="flex-1 px-6">
					<div className="max-w-md mx-auto">
						<TextField
							size="small"
							placeholder="Search"
							fullWidth
							sx={{ background: "#f6f7fb", borderRadius: 2,"& fieldset": { border: "none" }}}
							slotProps={{
									input: {
										startAdornment: <InputAdornment position="start"><Search/></InputAdornment>,
									},
							}}
						/>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<Notifications className="text-slate-500" />
					<Settings className="text-slate-500" />
					<Avatar src={avatar} />
				</div>
			</div>
	 </div>
	)
}

export default Navbar