import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function TextRating(props) {
    return (
        <Box
            sx={{
                width: 135,
                display: 'flex',
                alignItems: 'center',
            }}
            style={{ color: '#FF9017', fontSize: '16px' }}
        >
            <Rating
                name="text-feedback"
                value={props.rating}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon fontSize="inherit" />}
            />
            <Box sx={{ ml: 2 }} style={{ color: '#FF9017', fontSize: '16px' }}>
                {props.rating}
            </Box>
        </Box>
    );
}
