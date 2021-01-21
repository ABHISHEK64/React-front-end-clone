import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width:'400px',
    marginLeft:'250px',
    marginTop:'20px',
    borderRadius:'5px',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 400,
    height: 540,
  },
  link:{
     marginTop:'10px',
     color:'#008ad3',
     textDecoration:'none',
     fontSize:'large'
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1>Photos</h1>
        <Link className={classes.link}>See All Photos</Link>
      <GridList cellHeight={160} className={classes.gridList} cols={3} rows={3}>
        
          <GridListTile >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphLBcP3QubPr2sGjdSXfef4skJu8pjmXRAw&usqp=CAU" alt="" />
        
        
          </GridListTile>
          <GridListTile >
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2ovQXK8urgEzWiMVL1XQdYPOjGfJ70kDgg&usqp=CAU" alt="" />
                   
         </GridListTile>
          <GridListTile >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsj2am1afr34pa9GpePGoTchnfz7sdF29hXg&usqp=CAU"/>
            
          </GridListTile>
          <GridListTile>
            
            <img src="https://i.pinimg.com/originals/9f/6c/45/9f6c454f1c640ff8da7458413102c802.jpg"/>
          </GridListTile>
          <GridListTile>
            
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrAheru4szaaPL0_L7P2hMwArEWuF-ONZSw&usqp=CAU"/>
          </GridListTile>
          <GridListTile>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphLBcP3QubPr2sGjdSXfef4skJu8pjmXRAw&usqp=CAU"/>
            </GridListTile>
            <GridListTile>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0iI4KvlYTko8sB9vqKDFwavRWRDB_FTIlg&usqp=CAU"/>
            </GridListTile>
            <GridListTile>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaUk939bCCZnFKBzP3VlsIKprp47EtdDMcA&usqp=CAU"/>
            </GridListTile>
            <GridListTile>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxl0f8yUuUMs3VlXU8cFXdnkF3J6iwmgSiQ&usqp=CAU"/>
            
            
            </GridListTile>
      
      </GridList>
    </div>
  );
}