import { ListItemButton as MuiListItemButton, ListItemIcon as MuiListItemIcon, styled } from '@mui/material';

const ListItemButton = styled(MuiListItemButton, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'active'
}) <{ open: boolean; active: boolean }>`
  min-height: 48px;
  justify-content: ${({ open }) => (open ? 'initial' : 'center')};
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: ${({ theme, active }) => (active ? theme.palette.primary.dark : 'transparent')};
`;

const ListItemIcon = styled(MuiListItemIcon, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'activeColor' && prop !== 'path'
}) <{ open: boolean, activeColor: (path: string) => string, path: string }>`
  min-width: 0;
  margin-right: ${({ open }) => (open ? '3rem' : 'auto')};
  justify-content: center;
  color: ${({ activeColor, path }) => activeColor(path)};
`;

const InProgressIcon = styled(MuiListItemIcon, {
    shouldForwardProp: (prop) => prop !== 'activeColor',
}) <{ activeColor: string }>`
  color: ${({ activeColor }) => activeColor};
  font-size: ${({ theme }) => theme.typography.subtitle2.fontSize};
`;


export { ListItemButton, ListItemIcon, InProgressIcon };