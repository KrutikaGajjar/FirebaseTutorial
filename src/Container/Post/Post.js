import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import AlertBox from "../../Components/Alert/alert";

export default function Post() {
	const [eventDetails, setEventsDetails] = useState({ name: "", place: "", address: "", time: "" });
	const timerRef = useRef(null);
	const [alert, setAlert] = useState({ visible: false, severity: "", message: "" });

	useEffect(() => {
		return clearTimeout(timerRef.current);
	}, []);

	const handleSubmit = () => {
		const collRef = collection(db, "Events");
		console.log(collRef, "collRef");
		addDoc(collRef, {
			name: eventDetails.name,
			address: eventDetails.address,
			place: eventDetails.place,
			time: eventDetails.time,
		})
			.then((result) => {
				console.log(result);
				setAlert({ visible: true, severity: "success", message: "Event has been uploaded" });
				timerRef.current = setTimeout(() => {
					setAlert({ visible: false, severity: "", message: "" });
				}, 2000);
			})
			.catch((error) => {
				console.log(error.code, error.message);
				setAlert({ visible: true, severity: "error", message: error.message });

				timerRef.current = setTimeout(() => {
					setAlert({ visible: false, severity: "", message: "" });
				}, 2000);
			});
	};

	return (
		<Box
			sx={{
				display: "flex",
				alignContent: "center",
				justifyContent: "center",
				flexDirection: "column",
				width: "50%",
			}}
		>
			<AlertBox visible={alert.visible} severity={alert.severity} message={alert.message} />
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						name="Name of Event"
						fullWidth
						required
						id="Name"
						label="Name of Event"
						value={eventDetails.name}
						onChange={(event) => setEventsDetails({ ...eventDetails, name: event.target.value })}
						autoFocus
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						name="Place of Event"
						fullWidth
						required
						id="place"
						label="Place of Event"
						value={eventDetails.place}
						onChange={(event) => setEventsDetails({ ...eventDetails, place: event.target.value })}
						autoFocus
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						name="Complete Address"
						fullWidth
						required
						id="Address"
						label="Complete Address"
						value={eventDetails.address}
						onChange={(event) => setEventsDetails({ ...eventDetails, address: event.target.value })}
						autoFocus
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						name="Time of Event"
						fullWidth
						required
						id="time"
						label="Time of Event"
						value={eventDetails.time}
						onChange={(event) => setEventsDetails({ ...eventDetails, time: event.target.value })}
						autoFocus
					/>
				</Grid>
			</Grid>
			<Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
				submit
			</Button>
		</Box>
	);
}
