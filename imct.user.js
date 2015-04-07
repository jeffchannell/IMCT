// ==UserScript==
// @name        Ingress Mission Creator Tweaks
// @namespace   *
// @include     https://mission-author-dot-betaspike.appspot.com/
// @version     0.0.1
// @grant       none
// ==/UserScript==

// derp http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
var css = [
	'.container{max-width:100%}'
,	'.list .create-mission-button{margin-top:4px}'
,	'.list .missions-list{padding-top:2px}'
,	'.list .missions-list .row{margin-left:0px;margin-right:0px}'
,	'.list .missions-list .mission{float:left;max-width:49%;min-width:49%;padding:0px;margin-left:3px;height:64px}'
,	'.list .mission .buttons .action-button-hr-div{display:none}'
,	'.list .mission .col-sm-6{width:80%}'
,	'.list .mission .actions{width:auto;float:right}'
,	'.list .mission .buttons .button-group button{float:right;height:24px}'
,	'.list .mission .buttons .button-group .button-description{display:none}'
,	'.list .mission .mission-image{margin-top:2px}'
,	'.list .mission .details .info .name{font-size:16px}'
,	'.list .mission .details .info .mission-time-submitted,.list .mission .details .info .mission-time-published,.list .mission .details .info .mission-time-draft{font-size:12px}'
	].join(''),
	head = document.head || document.getElementsByTagName('head')[0],
	style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet)
{
	style.styleSheet.cssText = css;
}
else
{
	style.appendChild(document.createTextNode(css));
}

head.appendChild(style);

