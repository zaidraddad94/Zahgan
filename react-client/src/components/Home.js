import React from 'react'

const Home=(props)=>{
 const content = props.items.map((item) =>
    <div >
      <h3>{item.Name} &nbsp;&nbsp;&nbsp;&nbsp;{item.HomeWork}</h3>
    </div>
  );
    return(
        
        <div className="container-fluid page-cont">
		<div className="row dash-row">
			
			<div className="col-4 data-box">
				<div>
				{content}
				</div>
			</div>
			
			<div className="col-4 data-box">
				<div>
				</div>
			</div>
			
			<div className="col-4 data-box">
				<div>
				</div>
			</div>
			
		</div>
	</div>
    )
}

export default Home

