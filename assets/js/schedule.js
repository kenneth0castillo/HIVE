function SchedulePlan( element ) {
    this.element = element;
    this.timeline = this.element.find('.timeline');
 
    this.eventsWrapper = this.element.find('.events');
    this.eventsGroup = this.eventsWrapper.find('.events-group');
    this.singleEvents = this.eventsGroup.find('.single-event');
 
    this.scheduleReset();
    this.initEvents();
 }
 
 var self = this;
 this.singleEvents.each(function(){
   var start = getScheduleTimestamp($(this).attr('data-start')),
       duration = getScheduleTimestamp($(this).attr('data-end')) - start;
 
   var eventTop = self.eventUnitHeight*(start - self.timelineStart)/self.timelineUnitDuration,
       eventHeight = self.eventUnitHeight*duration/self.timelineUnitDuration;
 
   $(this).css({
      top: (eventTop -1) +'px',
      height: (eventHeight+1)+'px'
   });
 });
 
 var self = this;
 this.singleEvents.each(function(){
   //place each event in the grid -> need to set top position and height
   var start = getScheduleTimestamp($(this).attr('data-start')), //getScheduleTimestamp converts hh:mm to timestamp
       duration = getScheduleTimestamp($(this).attr('data-end')) - start;
 
   var eventTop = self.eventUnitHeight*(start - self.timelineStart)/self.timelineUnitDuration,
       eventHeight = self.eventUnitHeight*duration/self.timelineUnitDuration;
 
   $(this).css({
      top: (eventTop -1) +'px',
      height: (eventHeight+1)+'px'
   });
 });