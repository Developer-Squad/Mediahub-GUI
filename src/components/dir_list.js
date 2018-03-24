import React from 'react';

export class Dir_list extends React.Component{

	render(){
		var type = this.props.file.filetype
		var b = this.props.file.filename;
		var c = this.props.file.filesize;
        if(type === 'mp4' || type === 'mkv' || type === 'avi')
            var tag = <img src = {require('../assets/video.png')} className="image-dir" />;
        else if(type === 'mp3' || type === 'wav')
            var tag = <img src={require('../assets/music.png')} className="image-dir" />;
        else if(type === 'folder')
            var tag = <img src={require('../assets/folder.png')} className="image-dir" />;
        else
            var tag = <img src={require('../assets/icon.png')} className="image-dir" />;
		var dd = (
			<div className="btable">
				<table className="table is-fullwidth is-hoverable pagal selectable">
			 		<tr>
						<th>Icon</th>
						<th>Name</th>
						<th>Description</th>
					</tr>
					<tr>
		      			<td>{tag}</td>
		      			<td>{b}</td>
		      			<td>{c}</td>
		    		</tr>

		    	    <tr>
		    			<td>{tag}</td>
		      			<td>{b}</td>
		      			<td>{c}</td>
		   			</tr>
		   		</table>
		   	</div>
	   	);	
	   	//list.	
		return(
			
				dd
			
			);
	}
}
