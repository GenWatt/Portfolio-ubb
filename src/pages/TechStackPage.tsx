import { Card, CardContent, Grid, Typography, useTheme } from '@mui/material'
import JS from '../assets/images/js.png'
import REACT from '../assets/images/react.png'
import VUE from '../assets/images/vue.png'
import NODE from '../assets/images/node.png'
import MONGODB from '../assets/images/mongoDb.png'
import SQL from '../assets/images/SQL.png'
import UNITY from '../assets/images/unity.png'
import PYTHON from '../assets/images/python.jpg'
import CSHARP from '../assets/images/csharp.jpg'
import DOTNET from '../assets/images/.Net.png'

const techStack = [
    { name: 'JavaScript', description: 'JavaScript description...', image: JS },
    { name: 'React', description: 'React description...', image: REACT },
    { name: 'Vue', description: 'Vue description...', image: VUE },
    { name: 'Node', description: 'Node description...', image: NODE },
    { name: 'MongoDB', description: 'MongoDB description...', image: MONGODB },
    { name: 'SQL', description: 'SQL description...', image: SQL },
    { name: 'C#', description: 'C# description...', image: CSHARP },
    { name: '.NET', description: '.NET description...', image: DOTNET },
    { name: 'Python Tkinter', description: 'Python Tkinter description...', image: PYTHON },
    { name: 'Unity', description: 'Unity description...', image: UNITY },
];

function TechStackPage() {
    const theme = useTheme()
    return (
        <Grid container spacing={2}>
            {techStack.map((tech, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardContent sx={{ display: 'flex', gap: 2 }}>
                            <img src={tech.image} alt={tech.name} style={{ width: 50, height: 50 }} />

                            <div>
                                <Typography variant="h5" component="div">
                                    {tech.name}
                                </Typography>
                                <Typography variant="body2" color={theme.palette.secondary.main}>
                                    {tech.description}
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
export default TechStackPage