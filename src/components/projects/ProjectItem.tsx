import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Repository } from '../../types';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import { Box, Button, Chip, Grid, Tooltip } from '@mui/material';
import useFormat from '../../hooks/useFormat';
import { GitHub } from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import useTranslation from '../../hooks/useTranslation';

export interface ProjectItemProps {
    repo: Repository
}

export default function ProjectItem({ repo }: ProjectItemProps) {
    const theme = useTheme()
    const snakbar = useSnackbar()
    const { formatDate } = useFormat()
    const { t } = useTranslation()

    const share = () => {
        navigator.clipboard.writeText(repo.html_url)
        snakbar.enqueueSnackbar(t('repositoryLinkCopiedToClipboard'), { variant: 'success' })
    }

    const styles = {
        backgroundColor: theme.palette.primary.dark,
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        borderRadius: theme.spacing(.1),
        color: theme.palette.mode === 'light' ? theme.palette.text.secondary : 'inherit'
    }

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card>
                <Tooltip title={<div>
                    <Typography component={'span'} variant='subtitle2'>{t('seeUserOnGithub')}</Typography>
                    <Typography component={'strong'} color={theme.palette.primary.main} variant='body2'>{' ' + repo.owner.login}</Typography>
                </div>}>
                    <a href={repo.owner.html_url} target='blank'>
                        <CardHeader
                            avatar={(
                                <Avatar sx={{ bgcolor: theme.palette.primary.main }} src={repo.owner.avatar_url}>
                                    {repo.owner.login[0]}
                                </Avatar>
                            )}
                            title={repo.owner.login}
                            sx={{ px: 1 }}
                        />
                    </a>
                </Tooltip>
                {repo.project.images.length ? <Carousel>
                    {repo.project.images.map((image) => (
                        <CardMedia
                            key={image}
                            component="img"
                            height="194"
                            image={image}
                            alt="app screenshot"
                        />
                    ))}
                </Carousel> : null}

                <div style={{ ...styles }}>
                    <Typography variant='subtitle2'>{t('createdAt')}: {formatDate(repo.created_at)}</Typography>
                    <Typography variant='subtitle2'>{t('lastCommit')}: {formatDate(repo.updated_at)}</Typography>
                </div>

                <Tooltip title={t('seeRepositoryOnGithub')}>
                    <CardContent sx={{ p: 1 }}>
                        <a href={repo.html_url} target='blank'>
                            <Typography variant="h5" color="text.primary">
                                {repo.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {repo.description}
                            </Typography>
                        </a>

                        <Grid container spacing={1} pt={1}>
                            {repo.project.tags.map((tag) => (
                                <Grid item key={tag}>
                                    <Chip label={tag} />
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Tooltip>

                <CardActions>
                    <a href={repo.html_url} target='blank'>
                        <Button variant='contained'>
                            <GitHub sx={{ marginRight: 1 }} /> {t('seeOnGithub')}
                        </Button>
                    </a>

                    <Box component={'div'} display={'flex'} gap={.5}>
                        <FavoriteIcon color='error' />
                        <Typography color={theme.palette.error.main}>({repo.stargazers_count})</Typography>
                    </Box>

                    <IconButton aria-label="share" onClick={share}>
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}