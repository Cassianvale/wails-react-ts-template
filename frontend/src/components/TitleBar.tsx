import { Box, IconButton, Typography } from '@mui/material';
import { Minimize, Close, CropSquare, PushPin, PushPinOutlined } from '@mui/icons-material';
import { GreetService } from '../../bindings/changeme';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

export default function TitleBar() {
  const theme = useTheme();
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);

  const handleAlwaysOnTop = () => {
    const newState = !isAlwaysOnTop;
    setIsAlwaysOnTop(newState);
    GreetService.SetAlwaysOnTop(newState);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: 'background.paper',
        p: 1,
        height: '32px',
        borderBottom: 1,
        borderColor: 'divider',
        position: 'relative',
        zIndex: theme.zIndex.drawer + 2,
        '--wails-draggable': 'drag',
        '& .no-drag': {
          '--wails-draggable': 'no-drag'
        }
      }}
    >
      <Typography variant="h6">My Application</Typography>
      <Box className="no-drag">
        <IconButton onClick={handleAlwaysOnTop}>
          {isAlwaysOnTop ? <PushPin fontSize="small" /> : <PushPinOutlined fontSize="small" />}
        </IconButton>

        <IconButton onClick={() => GreetService.Minimize()}>
          <Minimize fontSize="small" />
        </IconButton>
        <IconButton onClick={() => GreetService.Maximize()}>
          <CropSquare fontSize="small" />
        </IconButton>
        <IconButton onClick={() => GreetService.Close()}>
          <Close fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
} 