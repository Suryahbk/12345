import React, { useState } from "react";
import { TextField, Grid, Typography, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, FormHelperText } from "@mui/material";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface HomeComponent {
    mode: string,
    isOpen: boolean,
    studentName: string,
    studentNameError: boolean,
    createdBy: string,
    createdByError: boolean,
    updatedBy: string,
    updatedByError: boolean,
    subject1: any,
    subject1Error: boolean,
    mark1: any,
    mark1Error: boolean,
    subject2: any,
    subject2Error: boolean,
    mark2: any,
    mark2Error: boolean,
};

function Home() {

    const [state, setState] = useState<HomeComponent>({
        mode: "ADD",
        isOpen: false,
        studentName: "",
        studentNameError: false,
        createdBy: "",
        createdByError: false,
        updatedBy: "",
        updatedByError: false,
        subject1: "",
        subject1Error: false,
        mark1: "",
        mark1Error: false,
        subject2: "",
        subject2Error: false,
        mark2: "",
        mark2Error: false,
    });

    const handleAdd = () => {
        setState({ ...state, isOpen: true, mode: "ADD", studentName: "", studentNameError: false, createdBy: "", createdByError: false, updatedBy: "", updatedByError: false, subject1: "", subject1Error: false, mark1: "", mark1Error: false, subject2: "", subject2Error: false, mark2: "", mark2Error: false })
    };

    const handleClose = () => {
        setState({ ...state, isOpen: false })
    };

    const handleSubmit = () => {
        const { studentName, createdBy, updatedBy, subject1, mark1, subject2, mark2 } = state;
        let isError = false;

        if (studentName === "" || studentName === null || studentName === undefined) {
            setState((prevState) => ({ ...prevState, studentNameError: true }))
            isError = true;
        }
        if (createdBy === "" || createdBy === null || createdBy === undefined) {
            setState((prevState) => ({ ...prevState, createdByError: true }))
            isError = true;
        }
        if (updatedBy === "" || updatedBy === null || updatedBy === undefined) {
            setState((prevState) => ({ ...prevState, updatedByError: true }))
            isError = true;
        }
        if (subject1 === "" || subject1 === null || subject1 === undefined) {
            setState((prevState) => ({ ...prevState, subject1Error: true }))
            isError = true;
        }
        if (mark1 === "" || mark1 === null || mark1 === undefined) {
            setState((prevState) => ({ ...prevState, mark1Error: true }))
            isError = true;
        }
        if (subject2 === "" || subject2 === null || subject2 === undefined) {
            setState((prevState) => ({ ...prevState, subject2Error: true }))
            isError = true;
        }
        if (mark2 === "" || mark2 === null || mark2 === undefined) {
            setState((prevState) => ({ ...prevState, mark2Error: true }))
            isError = true;
        }

        if (isError === false) {
            let obj: any = {};
        }
    };

    return (
        <Grid container>
            <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" onClick={handleAdd}><AddIcon />Add</Button>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "10px" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{ backgroundColor: "#3B6832" }}>
                            <TableRow>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>Student Name</TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>Created By</TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>Updated By</TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>Subject-1</TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>Mark-1</TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>Subject-2</TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>Mark-2</TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {rows.map((row) => ( */}
                            <TableRow
                                // key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center" style={{ display: "flex", justifyContent: "space-around" }}>
                                    <Button variant="contained"><EditIcon />Edit</Button>
                                    <Button variant="contained"><DeleteIcon />Delete</Button>
                                </TableCell>
                            </TableRow>
                            {/* ))} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={state.isOpen} maxWidth={"md"}>
                <DialogTitle sx={{ m: 0, p: 2, }} id="customized-dialog-title" style={{ fontWeight: "bold" }}>
                    Add List
                    <IconButton aria-label="close" onClick={() => handleClose()} sx={{ position: 'absolute', right: 8, top: 8, color: "#1D94C8", cursor: "pointer" }}>
                        <DisabledByDefaultRoundedIcon style={{ width: 30, height: 30, color: "#000" }} />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Typography>Student Name</Typography>
                            <TextField
                                fullWidth
                                placeholder="Student Name"
                                value={state.studentName}
                                onChange={(e) => setState({ ...state, studentName: e.target.value, studentNameError: false })}
                                error={state.studentNameError}
                            />
                            {state.studentNameError &&
                                <FormHelperText style={{ color: "red", marginLeft: "5px" }}>Please enter the student name</FormHelperText>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Typography>Created By</Typography>
                            <TextField
                                fullWidth
                                placeholder="Created By"
                                value={state.createdBy}
                                onChange={(e) => setState({ ...state, createdBy: e.target.value, createdByError: false })}
                                error={state.createdByError}
                            />
                            {state.createdByError &&
                                <FormHelperText style={{ color: "red", marginLeft: "5px" }}>Please enter the created by</FormHelperText>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Typography>Updated By</Typography>
                            <TextField
                                fullWidth
                                placeholder="Updated By"
                                value={state.updatedBy}
                                onChange={(e) => setState({ ...state, updatedBy: e.target.value, updatedByError: false })}
                                error={state.updatedByError}
                            />
                            {state.updatedByError &&
                                <FormHelperText style={{ color: "red", marginLeft: "5px" }}>Please enter the updated by</FormHelperText>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Typography>Subject 1</Typography>
                            <TextField
                                fullWidth
                                placeholder="Subject 1"
                                value={state.subject1}
                                onChange={(e) => setState({ ...state, subject1: e.target.value, subject1Error: false })}
                                error={state.subject1Error}
                            />
                            {state.subject1Error &&
                                <FormHelperText style={{ color: "red", marginLeft: "5px" }}>Please enter the subject 1</FormHelperText>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Typography>Mark 1</Typography>
                            <TextField
                                fullWidth
                                placeholder="Mark 1"
                                value={state.mark1}
                                onChange={(e) => setState({ ...state, mark1: e.target.value, mark1Error: false })}
                                error={state.mark1Error}
                            />
                            {state.mark1Error &&
                                <FormHelperText style={{ color: "red", marginLeft: "5px" }}>Please enter the mark 1</FormHelperText>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Typography>Subject 2</Typography>
                            <TextField
                                fullWidth
                                placeholder="Subject 2"
                                value={state.subject2}
                                onChange={(e) => setState({ ...state, subject2: e.target.value, subject2Error: false })}
                                error={state.subject2Error}
                            />
                            {state.subject2Error &&
                                <FormHelperText style={{ color: "red", marginLeft: "5px" }}>Please enter the subject 2</FormHelperText>
                            }
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Typography>Mark 2</Typography>
                            <TextField
                                fullWidth
                                placeholder="Mark 2"
                                value={state.mark2}
                                onChange={(e) => setState({ ...state, mark2: e.target.value, mark2Error: false })}
                                error={state.mark2Error}
                            />
                            {state.mark2Error &&
                                <FormHelperText style={{ color: "red", marginLeft: "5px" }}>Please enter the mark 2</FormHelperText>
                            }
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
};

export default Home;