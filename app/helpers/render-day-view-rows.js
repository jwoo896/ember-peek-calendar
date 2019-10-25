import { helper } from '@ember/component/helper';

export function renderDayViewRows(){
  const timeSlotsContainerDiv = document.getElementById('time-slots-list');

  [...Array(24)].map((x, i) => {
    let timeSlotsListItemDiv = document.createElement('div');
    let timeSlotsListItemBlockDiv = document.createElement('div');
    let hourTextWrapperDiv = document.createElement('div');
    let hourTextPosSpan = document.createElement('span');
    let hourTextPosTextNode = document.createTextNode(i === 0 ? "12:00am" : i < 12 ? `${i}:00 am` : i === 12 ? `${i}:00 pm` : `${i-12}:00 pm`);

    timeSlotsListItemDiv.className = "time-slots-list-item";
    timeSlotsListItemBlockDiv.className = "time-slots-list-item-block";
    hourTextWrapperDiv.className = "hour-text-wrapper";
    hourTextPosSpan.className = "hour-text-pos";

    hourTextPosSpan.appendChild(hourTextPosTextNode);
    hourTextWrapperDiv.appendChild(hourTextPosSpan);
    timeSlotsListItemDiv.appendChild(hourTextWrapperDiv);
    timeSlotsListItemDiv.appendChild(timeSlotsListItemBlockDiv);
    timeSlotsContainerDiv.appendChild(timeSlotsListItemDiv);
  });
}

export default helper(renderDayViewRows);
