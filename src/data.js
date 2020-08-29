export const channels = [
    {
      campaignType:'digital',
      channelTypes:[
        {type:'In app',checked:true},
        {type:'Mobile',checked:false},
        {type:'Desktop',checked:false},
        {type:'Social media',checked:false},
        {type:'Paid Search',checked:false},
        {type:'Email',checked:false},
        {type:'Lead form',checked:false},
        {type:'Landing page',checked:false}
      ],
      trackingOptions:[
      {type:'Visits',checked:true},
      {type:'Transactions',checked:false}
      ]
    },
    {
      campaignType:'outside',
      channelTypes:[
        {type:'In shop',checked:true},
        {type:'Billboards',checked:false},
        {type:'Semianr',checked:false},
        {type:'Newspaper',checked:false},
        {type:'Posters',checked:false},
        {type:'Events',checked:false}
      ],
      trackingOptions:[
        {type:'Head counts',checked:true},
        {type:'Avg Footfall',checked:false}
      ]
    },
    {
      campaignType:'TV',
      channelTypes:[
        {type:'Private',checked:true},
        {type:'Local tv',checked:false},
        {type:'State tv',checked:false}
      ],
      trackingOptions:[
        {type:'Views',checked:true},
        {type:'TRP',checked:false},
        {type:'count',checked:false}
      ]
    },
    {
      campaignType:'radio',
      channelTypes:[
        {type:'Private',checked:true},
        {type:'Public',checked:false},
        {type:'Local',checked:false}
      ],
      trackingOptions:[
        {type:'Tuned in',checked:true},
        {type:'on Call',checked:false}
      ]
    }
];

export const validateCheckbox = (data) => {

  for(let i=0; i< data.length; i++){
    if(data[i].checked === true){
      return true;
    }
  };
  return false;
}

export const validateDates = (start,end) => {
  let temp = new Date();
  temp.setDate(temp.getDate() - 1);
  if(start.getTime() < temp){
    return "Enter a valid start date."
  } else if(start.getTime() >= end.getTime()){
    return "Enter a valid end date."
  } else {
    return true;
  }
 
}

export const validateInput = (data) => {
  if(parseInt(data)<1000){
    return 'Enter a value more than 1000'
  } else if(data === '' || !(/^\d+$/.test(data)) ||!parseInt(data)){
    return 'Enter a valid number.'
  } else {
    return false;
  }
}

export const isChecked = (data) => {
  // return data.filter(each => (each.checked === true));
  let checkedOptions = []
  data.forEach(each => {
    if(each.checked === true){
      checkedOptions.push(each.type);
    }
  });
  return checkedOptions;
}

export const defaultDate = (d) => {  
  let formattedDate = Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }).format(d);

  return formattedDate; 
}








