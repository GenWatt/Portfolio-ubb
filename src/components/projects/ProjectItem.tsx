import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Repository } from '../../types';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import { Alert, Badge, Box, Button, Chip, Grid, Tooltip } from '@mui/material';
import useFormat from '../../hooks/useFormat';


export interface ProjectItemProps {
    repo: Repository
}

export default function ProjectItem({ repo }: ProjectItemProps) {
    const theme = useTheme()
    const { formatDate } = useFormat()

    return (
        <Grid item xs={12} md={6}>
            <Card>
                <Tooltip title={`See user on github ${repo.owner.login}`}>
                    <a href={repo.owner.html_url} target='blank'>
                        <CardHeader
                            avatar={(
                                <Avatar sx={{ bgcolor: theme.palette.primary.main }} src={repo.owner.avatar_url}>
                                    {repo.owner.login[0]}
                                </Avatar>
                            )}
                            title={repo.owner.login}
                        />
                    </a>
                </Tooltip>
                {repo.project.images.length ? <Carousel>
                    {repo.project.images.map((image) => (
                        <CardMedia
                            component="img"
                            height="194"
                            image={image}
                            alt="Paella dish"
                        />
                    ))}
                </Carousel> : null}

                <Box sx={{ backgroundColor: theme.palette.primary.light, padding: theme.spacing(1), margin: theme.spacing(1), borderRadius: theme.spacing(.1) }}>
                    <Typography variant='subtitle2'>Created at: {formatDate(repo.created_at)}</Typography>
                    <Typography variant='subtitle2'>Last commit: {formatDate(repo.updated_at)}</Typography>
                </Box>

                <Tooltip title="See repository on github">

                    <CardContent>
                        <a href={repo.html_url} target='blank'>
                            <Typography variant="h5" color="text.primary">
                                {repo.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {repo.description}
                            </Typography>
                        </a>

                        <Box marginTop={2} gap={1} display={'flex'}>
                            {repo.project.tags.map((tag) => (
                                <Chip label={tag} />
                            ))}
                        </Box>
                    </CardContent>

                </Tooltip>

                <CardActions>
                    <a href={repo.html_url} target='blank'>
                        <Button variant='contained'>
                            See on github
                        </Button>
                    </a>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>

                    <Typography>({repo.stargazers_count})</Typography>

                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}