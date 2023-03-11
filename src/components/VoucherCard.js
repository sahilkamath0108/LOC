import React from 'react'

const VoucherCard = () => {
  return (
<div className="rectangle-parent">
        <div className="group-child" />
        <div className="group-item" />
        <div className="group-inner" />
        <div className="rectangle-div" />
        <div className="hm">{`H&M`}</div>
        <div className="fashion">Fashion</div>
        <img className="group-child1" alt="" src="/rectangle-84@2x.png" />
        <div className="group-child2" />
        <div className="div">₹500</div>
        <div className="group-child3" />
        <img className="icon-link-alt" alt="" src="/-icon-link-alt.svg" />
        <Button
          className="buttontext-only"
          sx={{ width: 124 }}
          variant="text"
          color="primary"
        >
          Go to site
        </Button>
        <Button
          className="buttoncontained-text"
          sx={{ width: 155 }}
          variant="contained"
          color="primary"
        >
          Use coupon
        </Button>
      </div>  )
}

export default VoucherCard;