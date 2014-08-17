function tollfree() 
	{
	var myDate = new Date();
		var gmt = -myDate.getTimezoneOffset()/60;
		if(gmt == 5.5)
		{
			document.getElementById('tollfree').innerHTML = 'Call Us:&nbsp<b> 08373903469</b>';
		}else
		{
		document.getElementById('tollfree').innerHTML = 'Call Us:&nbsp;<b>+(91)-8373903469</b>';
		}	
	};
/*pns number closed*/
/*for search box start*/
function searchCheck(){
var str='';
if(document.frm.ss.value=='' || document.frm.ss.value=='Search Products/Services'){
alert("Please enter some keyword to search.");
document.frm.ss.focus();
document.frm.ss.value='';
return false;}
if(document.frm.ss.value.length<3){
alert("Please Enter atleast 3 character");
document.frm.ss.focus();
return false;}
if(document.frm.ss.value){
var str1;
str1=document.frm.ss.value.replace(/^\s+/g,'').replace(/\s+$/g,'');
str1=str1.replace(/[^a-zA-Z0-9+]/g,' ');
str1=str1.replace(/\+/g,' ');
str1=str1.replace(/\s+/g,'+');
str+='ss='+str1;
window.location = "http://www.alnabiotech.com/search.html?"+str;
return false;}};
function searchClear(){
if(document.frm.ss.value=='Search Products/Services'){
document.frm.ss.value='';}};
function settext(){
if(document.frm.ss.value==''){
document.frm.ss.value='Search Products/Services';}};
function settextvalue(){
document.frm.ss.value='Search Products/Services';};
/*end of search box functions*/
/*cookies for category page starts*/
function getCartCookie(Name)
{
    var search = Name + "=";
    if (document.cookie.length > 0)
    { /* if there are any cookies*/
        offset = document.cookie.indexOf(search);
        if (offset != -1)
        { /* if cookie exists*/
            offset += search.length;
            /* set index of beginning of value*/
            end = document.cookie.indexOf(";", offset);
            /* set index of end of cookie value*/
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(offset, end));
        }
    }
    return "";
};
/*cookies for category page starts*/
/*drop.js start*/
var ver='3.0.1D';
var m1=new Object;
m1.name='m1';
m1.fnm='so-';
if(!window.lastm||window.lastm<1)lastm=1;
m1.v17=null;
m1.v17Timeout='';
var maxZ=1000;
m1.v18;
m1.targetFrame;
var docLoaded=false;
m1.bIncBorder=true;
m1.v29=null;
m1.v29Str='';
m1.v55=50;
m1.scrollStep=10;
m1.fadingSteps=2;
m1.itemOverDelay=0;
m1.transTLO=0;
m1.fixSB=0;
m1.v21=".";
m1.maxlev=2;
m1.v22=0;
m1.sepH=10;
m1.bHlNL=1;
m1.showA=1;
m1.bVarWidth=0;
m1.bShowDel=50;
m1.scrDel=0;
m1.v23=160;          /*width dropdown*/
m1.levelOffset=-1;
m1.levelOffsety=2;
m1.bord=1;
m1.vertSpace=5;
m1.sep=1;
m1.v19=false;
m1.bkv=0;
m1.rev=0;
m1.shs=0;
m1.xOff=0;
m1.yOff=0;
m1.v20=false;
m1.cntFrame="";
m1.menuFrame="";
m1.v24="";
m1.mout=true;
m1.iconSize=8;
m1.closeDelay=1000;
m1.tlmOrigBg="#000000"; /*first frame mouseout color*/
m1.tlmOrigCol="Black";
m1.v25=false;
m1.v52=false;
m1.v60=0;
m1.v11=false;
m1.v10=0;
m1.ppLeftPad=5;
m1.v54=0;
m1.v01=2;
m1.tlmHlBg="#F4F4F4"; /*first frame mouseover color*/
m1.tlmHlCol="White";
m1.menuHorizontal=true;
m1.scrollHeight=6;
m1mn1=new Array
(
"Pharma Franchise","pharma-franchise.html",0,"","",
"Antibiotics And Anti Infectives","antibiotics-and-anti-infectives.html",0,"","",
"Haematinics Medicine","haematrics-medicine.html",0,"","",
"Hormones Medicine","hormones-medicine.html",0,"","",
"ORTHO CARE DRUGS","ortho-care-drugs.html",0,"","",
"Pharma Franchise for H&I critical care Injections","critical-care-injection.html",0,"","",
"Pharmaceutical Ethical Marketing","pharma-franchisee.html",0,"","",
"Pharma Franchise for Pharmaceutical Injectables","pharmaceutical-injectables.html",0,"","",
"Pharma Franchise for Analgesics Medicine","analgesics-medicine.html",0,"","",
"Gastro / Antiemetic / Anti Ulcerant","gastro-antiemetic-anti-ulcerant.html",0,"","",
"Neurology Medicine","neurology-medicine.html",0,"","",
"Nutritional Supplements","nutritional-supplements.html",0,"","",
"Gynecology Drugs","gynecology-drugs.html",0,"","",
"Pediatric Drugs","pediatric-drugs.html",0,"","",
"Anti-Diabetic Drugs","anti-diabetic-drugs.html",0,"","",
"Critical Care Antibiotic","critical-care-antibiotic.html",0,"","",
"New D.C.G.I. Molecules","new-molecules.html",0,"","",
"Pharmaceutical Capsules","pharmaceutical-capsules.html",0,"",""
);
m1mn61=new Array
(
"Pharma Franchise","pharma-franchise.html#pharma-franchise",0,"",""
);
m1mn62=new Array
(
"Antibiotics And Anti Infectives Tablets","antibiotics-and-anti-infectives.html#antibiotics-and-anti-infectives-tablets",0,"","",
"Antibiotics And Anti Infectives Syrup","antibiotics-and-anti-infectives.html#antibiotics-and-anti-infectives-syrup",0,"","",
"Antibiotics And Anti Infectives Injection","antibiotics-and-anti-infectives.html#antibiotics-and-anti-infectives-injection",0,"","",
"Cefupop-AZ","antibiotics-and-anti-infectives.html#cefupop-az",0,"",""
);
m1mn63=new Array
(
"Haematinics Tablet","haematrics-medicine.html#haematinics-tablet",0,"","",
"Haematinics Syrup","haematrics-medicine.html#haematinics-syrup",0,"","",
"Haematinics Injection","haematrics-medicine.html#haematinics-injection",0,"",""
);
m1mn64=new Array
(
"Hormones Tablet & Capsules","hormones-medicine.html#hormones-tablet-capsules",0,"","",
"Hormones Injection","hormones-medicine.html#hormones-injection",0,"",""
);
m1mn65=new Array
(
"Cholecalciferol 60,000 I.U( Softgel Capsules)","ortho-care-drugs.html#cholecalciferol-60-000-i-u-softgel-capsules",0,"",""
);
m1mn66=new Array
(
"Meropenem 125/500/1GM Injection","critical-care-injection.html#meropenem-125-500-1gm-injection",0,"","",
"Methylprednisolone Acetate 40/80mg Injections","critical-care-injection.html#methylprednisolone-acetate-40-80mg-injections",0,"","",
"Cefoperazone 1000mg & Tazobactum 125mg Injection","critical-care-injection.html#cefoperazone-1000mg-tazobactum-125mg-injection",0,"","",
"Piracetam 200mg/15ml Injection","critical-care-injection.html#piracetam-200mg-15ml-injection",0,"","",
"Paracetamol 1000mg Injection","critical-care-injection.html#paracetamol-1000mg-injection",0,"","",
"Enoxaparin 40/60mg Injection","critical-care-injection.html#enoxaparin-40-60mg-injection",0,"","",
"Hydrocortisone sodium Succinate 100mg Injection","critical-care-injection.html#hydrocortisone-sodium-succinate-100mg-injection",0,"","",
"Acyclovir 250/500 Injection","critical-care-injection.html#acyclovir-250-500-injection",0,"","",
"Cefipime 1000mg & Tazobactum 125mg Injection","critical-care-injection.html#cefipime-1000mg-tazobactum-125mg-injection",0,"","",
"Clindamycin 300/600mg Injection","critical-care-injection.html#clindamycin-300-600mg-injection",0,"","",
"Piperacillin 4000mg & Tazobactum 0.5mg Injection","critical-care-injection.html#piperacillin-4000mg-tazobactum-0-5mg-injection",0,"",""
);
m1mn67=new Array
(
"Pharmaceutical Ethical Marketing","pharma-franchisee.html#pharmaceutical-ethical-marketing",0,"",""
);
m1mn68=new Array
(
"Triamcinolne Acetonide 40mg Injection","pharmaceutical-injectables.html#triamcinolne-acetonide-40mg-injection",0,"",""
);
m1mn69=new Array
(
"Analgesics Tablets","analgesics-medicine.html#analgesics-tablets",0,"","",
"Analgesics Syrup","analgesics-medicine.html#analgesics-syrup",0,"","",
"Analgesics Injection","analgesics-medicine.html#analgesics-injection",0,"","",
"Alnase-SP","analgesics-medicine.html#alnase-sp",0,"","",
"Thioxib -D","analgesics-medicine.html#thioxib-d",0,"",""
);
m1mn610=new Array
(
"Gastro / Antiemetic / Anti Ulcerant Tablet","gastro-antiemetic-anti-ulcerant.html#gastro-antiemetic-anti-ulcerant-tablet",0,"","",
"Gastro / Antiemetic / Anti Ulcerant Injection","gastro-antiemetic-anti-ulcerant.html#gastro-antiemetic-anti-ulcerant-injection",0,"","",
"Gastro / Antiemetic / Anti Ulcerant Syrup","gastro-antiemetic-anti-ulcerant.html#gastro-antiemetic-anti-ulcerant-syrup",0,"","",
"Alnagol","gastro-antiemetic-anti-ulcerant.html#alnagol",0,"",""
);
m1mn611=new Array
(
"Neurology Tablet","neurology-medicine.html#neurology-tablet",0,"","",
"Neurology Injection","neurology-medicine.html#neurology-injection",0,"","",
"Alnacob- Forte","neurology-medicine.html#alnacob-forte",0,"",""
);
m1mn612=new Array
(
"Nutritional Supplements Tablets","nutritional-supplements.html#nutritional-supplements-tablets",0,"",""
);
m1mn613=new Array
(
"Gynecology Syrup","gynecology-drugs.html#gynecology-syrup",0,"","",
"Gynecology Injection","gynecology-drugs.html#gynecology-injection",0,"","",
"Feofer-C","gynecology-drugs.html#feofer-c",0,"",""
);
m1mn614=new Array
(
"Pediatric Tablet","pediatric-drugs.html#pediatric-tablet",0,"","",
"Pediatric Syrup","pediatric-drugs.html#pediatric-syrup",0,"","",
"Pediatric Injection","pediatric-drugs.html#pediatric-injection",0,"",""
);
m1mn615=new Array
(
"Anti-Diabetic Medication","anti-diabetic-drugs.html#anti-diabetic-medication",0,"",""
);
m1mn616=new Array
(
"Anti-infectives Injection","critical-care-antibiotic.html#anti-infectives-injection",0,"",""
);
m1mn617=new Array
(
"New DCGI  Molecules Injection","new-molecules.html#new-dcgi-molecules-injection",0,"","",
"D.C.G.I. Molecules","new-molecules.html#d-c-g-i-molecules",0,"",""
);
m1mn618=new Array
(
"Isotretinoin Capsules","pharmaceutical-capsules.html#isotretinoin-capsules",0,"","",
"Rive LS","pharmaceutical-capsules.html#rive-ls",0,"",""
);
m1mn3=new Array
(
"Profile","profile.html",0,"","",
"Company Brief","company-brief.html",0,"","",
"Quality ","quality.html",0,"","",
"Infrastructure & Facilities","infrastructure.html",0,"","",
"Company Presentation","corporate-presentation.html",0,"","",
"Company Brochure","corporate-brochure.html",0,"","",
"Download Brochure","javascript:openNewWindow()",0,"",""
);
function openNewWindow()
{
window.open('http://www.alnabiotech.com/alna-biotech-private-limited.pdf','_new');
};
absPath="";
if(m1.v19&&!m1.v20){
if(window.location.href.lastIndexOf("\\")>window.location.href.lastIndexOf("/")) {sepCh = "\\" ;} else {sepCh = "/" ;}
absPath=window.location.href.substring(0,window.location.href.lastIndexOf(sepCh)+1);}
m1.v61=0;
m1.v02=m1.v23;
document.write("<style type='text/css'>\n.m1CL0,.m1CL0:link{text-decoration:none;width:100%;color:white; }\n.m1CL0:visited{color:Black}\n.m1CL0:hover{text-decoration:underline}\n.m1mit{color:Black; font-family:verdana,Arial,Helvetica; font-size:10px; }\n"+"</"+"style>");
m1.attr=new Array("11px",false,false,"#fff","#859b2b","#fff","verdana,Arial,Helvetica","#C94C00","#fff","#fff");m1.borderCol="#6c801c";;
NS60=(navigator.userAgent.indexOf("Netscape6/6.0")!=-1);
Opera=(navigator.userAgent.indexOf('Opera')!=-1)||(navigator.appName.indexOf('Opera')!=-1)||(window.opera);
Opera7=(Opera&&document.createElement!=null&&document.addEventListener!=null);
IE4=(document.all&&!Opera);
mac=((IE4)&&(navigator.appVersion.indexOf("Mac")!=-1));
DOM=document.documentElement&&!IE4&&!Opera;
if(IE4){
av=navigator.appVersion;
avi=av.indexOf("MSIE");
if(avi==-1){version=parseInt(av);}else{version=parseInt(av.substr(avi+4));}}
function zz(e,i){
return e?e.document.getElementById(i):document.getElementById(i);};
function f33(p){
if(p&&p.indexOf(':/')==-1&&p.indexOf(':\\')==-1&&p.indexOf('/')!=0) return unescape(absPath)+p;
else return p;};
function addLoadHandler(lh){
if(lh){
if(!document.loadHandlers){
document.loadHandlers=new Array();
document.loadHandlers[0]=lh;
document.lastLoadHandler=0;}
else{
document.lastLoadHandler++;
document.loadHandlers[document.lastLoadHandler]=lh;}}};
addLoadHandler('f29');
addLoadHandler(window.onload);
/*window.onload=preloadImages();*/
function f32(){return true;};
window.onerror=f32;
function f01(op,opObj,vis,ns,ie,frc){
if(op||frc){
if(ns)opObj.style.MozOpacity=(vis&&op!=100)?(op/100):'0.999';
if(ie)opObj.style.filter=vis?"alpha(opacity="+op+")":"";}};
function f02(q,objId,step){
var obj=zz(q.v18,objId);
if(!obj ||(q.transTLO&&obj.level>0))return;
var objBg=zz(q.v18,objId+'bgWnd');
var max=q.v60?q.v60:100;
f01((q.fadingSteps-step)*max/q.fadingSteps,obj,1,1,1,1);
if(objBg)f01(100,objBg,0,0,q.v11,1);
if(step<=0)return;
setTimeout("f02("+q.name+",'"+objId+"',"+(step-1)+")",q.bShowDel/q.fadingSteps);};
function f04(wnd,width,borderWidth){
wnd.style.width=(width-borderWidth)+"px";
if(wnd.offsetWidth>width-borderWidth)wnd.style.width=(width-parseInt(wnd.style.paddingLeft)-parseInt(wnd.style.paddingRight))+"px";};
function f56(txt,op){
if(!txt)return "";
var i=op?txt.indexOf(op+':'):-2;
if(i !=-1){
var i2=txt.indexOf(";",i+2);
if(i2==-1)i2=txt.length;
return txt.substring(i+2,i2);}
return "";};
function f05(q,v12,level,v04,nsi)
{
var ppName=v12+"pp";
var pp=zz(q.v18,ppName);
if(pp)return pp;
if(q.v17&&q.v17.id==ppName)q.v17=null;
var v09=q.attr;
if(level>0)q.v02=q.v23;
var oldv02=q.v02;
pp=q.v18.document.createElement("DIV");
q.v18.document.body.appendChild(pp);
pp.id=ppName;
pp.v04=v04;
pp.level=level;
pp.v05=v09[5];
if(v12=='m1mn2')pp.v05='#f0f0f0';		/*to change mouseovercolour for showcase dropdown text*/
pp.v06=v09[3];
if(v12=='m1mn2')pp.v06='#000000';			/*to change bgcolour for showcase dropdown*/
var c1=v09[4];
if(v12=='m1mn2')c1='#BFD2EA';			/*to change bgcolour for showcase dropdown*/
var prop=eval("document."+v12+"prop");
if(prop){
var pw=f56(prop,"w");
if(pw)q.v02=parseInt(pw);
var bc=f56(prop,"p");
if(bc)c1=bc;}
pp.v07=v09[7];
if(v12=='m1mn2')pp.v07='#6070B1';		/*to change mouseover colour for showcase dropdown*/
pp.v08=c1;
pp.scrVis=false;
with(pp.style){
zIndex=maxZ;
position="absolute";
width=q.v02+"px";
if(!q.v11){
borderColor=q.borderCol;
if(v12=='m1mn2'){borderColor='#ffffff';		/*to change border colour for showcase dropdown*/
q.borderCol='#ffffff';
}
backgroundColor=c1;
borderWidth=q.bord+"px";
borderStyle="solid";}
else backgroundColor="";}
pp.q=q;
f30(pp,"mouseout",f15,false);
f30(pp,"mouseover",f14,false);
var v31=0;
var bgWnd=q.v18.document.createElement("DIV");
pp.appendChild(bgWnd);
bgWnd.id=pp.id+"bgWnd";
bgWnd.style.position="absolute";
bgWnd.style.top=q.v10+"px";
bgWnd.style.width=(q.v02-2*q.bord)+"px";
bgWnd.innerHTML="<font size='1'>&nbsp;</font>";
if(0){}
else{
bgWnd.style.backgroundColor=c1;}
if(q.v55)f03(q,pp,pp.id+"scrollUp","javascript:scrollUp("+q.name+",'"+pp.id+"');","(^1)",null,v09,true,v31,bgWnd);
var array=eval(v12);
var v13;
for(v13=0;v13<array.length/5;v13++){
var fold=array[v13*5+2];
var v30=fold?(v12+"_"+parseInt(v13+1)):null;
var options=array[v13*5+4];
v31+=f03(q,pp,null,array[v13*5+1],array[v13*5],v30,v09,(v13==array.length/5-1),v31,bgWnd,array[v13*5+3],options);}
if(q.v55)f03(q,pp,pp.id+"scrollDown","javascript:scrollDown("+q.name+",'"+pp.id+"');","(^2)",null,v09,true,v31,bgWnd);
var v28=0;
pp.style.height=(v31+q.bord*2+v28)+"px";
pp.maxHeight=v31+q.bord*2;
bgWnd.style.height=(v31-q.v10-v28)+"px";
if(pp.offsetHeight>v31+q.bord*2+v28){
pp.style.height=v31+"px";
q.bIncBorder=false;
pp.maxHeight=v31;}
q.v02=oldv02;
return pp;
};
function f03(q,pp,id,v27,v26,v30,v09,bLast,v31,parent,target,opt)
{
if(v26=="-")return q.sepH;
var itemType=0;
if(v26&&v26.indexOf("(^1)")!=-1)itemType=1;
if(v26&&v26.indexOf("(^2)")!=-1)itemType=2;
var itemWnd=q.v18.document.createElement("DIV");
pp.appendChild(itemWnd);
if(mac){
var brWnd=q.v18.document.createElement("BR");
pp.appendChild(brWnd);}
f30(itemWnd,"mouseover",f22,false);
f30(itemWnd,"mouseout",f23,false);
f30(itemWnd,"click",f20,false);
f30(itemWnd,"dblclick",f20,false);
itemWnd.owner=pp;
itemWnd.id=id;
with(itemWnd.style){
position="absolute";
if(itemType==2)top=(v31-q.scrollHeight)+"px";
else top=v31+"px";
if(v27){cursor=(!IE4||version>=7)?"pointer":"hand";}
else{cursor="default";}
if(!color)color=v09 [3];
if(!q.v11){
if(!bLast){
borderBottomColor=q.borderCol;
borderBottomWidth=q.sep+"px";
borderBottomStyle="solid";}}
else
left=(q.ppLeftPad+q.vertSpace)+"px";
if(!itemType)padding=q.vertSpace+"px";
paddingLeft=(q.ppLeftPad+q.vertSpace+q.v54)+"px";
paddingRight=((q.v01<q.iconSize?q.iconSize:q.v01)+q.vertSpace)+"px";
fontSize=v09[0];
fontWeight=(v09[1])?"bold":"normal";
fontStyle=(v09[2])?"italic":"normal";
fontFamily=v09[6];
textAlign=(q.v22==1?'center':(q.v22==2?'right':'left'));
f04(itemWnd,q.v11?q.v02-q.ppLeftPad-q.v01-2*q.vertSpace:q.v02,2*q.bord);}
if(v30)itemWnd.v30=v30;
if(itemType>0){
var arrow=q.v18.document.createElement("IMG");
itemWnd.appendChild(arrow);
var arrowSrc=f33(q.v21);
arrow.src="ts/"+q.fnm+"s"+((itemType==1)?"up":"down")+".gif";
arrow.setAttribute("HEIGHT","6","WIDTH","5");
arrow.className=((itemType==1)?"up":"down");
itemWnd.style.textAlign="center";
itemWnd.style.display="block";}
else
itemWnd.innerHTML=v26;
if(q.v56&&v27.indexOf(q.v56)==0)
itemWnd.url=q.v57+v27.substring(q.v56.length);
else
itemWnd.url=f33(v27);
itemWnd.f54=v26;
itemWnd.target=target;
if(v30&&q.showA){
var expandArrow=q.v18.document.createElement("IMG");
itemWnd.appendChild(expandArrow);
var v03=f33(q.v21);
expandArrow.src="ts/"+q.fnm+"ia.gif";
with(expandArrow.style){
width=q.iconSize+"px";
height=q.iconSize+"px";
position="absolute-bottom; padding-top:500px;";
var itemRect=f19(q,itemWnd);
top=((itemRect.bottom-itemRect.top)/2-q.iconSize/2)+"px";
left=(itemWnd.offsetWidth-q.iconSize-1)+"px";}}
if(opt){
itemWnd.customBg=f56(opt,"b");
itemWnd.customCl=f56(opt,"c");
itemWnd.status=f56(opt,"s");
var h=f56(opt,"h");
if(h)itemWnd.style.fontWeight=h;
var i=f56(opt,"i");
if(i)itemWnd.style.fontStyle=i;}
if(!itemWnd.status&&itemWnd.url.indexOf("<root>")!=-1)itemWnd.status=itemWnd.url.replace("<root>","/");
return itemWnd.offsetHeight;
};
function f35(wnd,vis){
var i=1;
while(true){
var eln='HideItem';
if(i>1)eln+=i;
var hideWnd=zz(wnd,eln);
if(!hideWnd)break;
hideWnd.style.visibility=vis ? 'visible' : 'hidden';
i++;}};
function f06(q,ppId,dl){
if(ppId.indexOf('_')==-1){
f35(q.v18,1);
if(q.actm&&dl)chgBg(q,q.actm,0,1);}
if(q.v29){q.v29Str=null;clearTimeout(q.v29);}
var pp=zz(q.v18,ppId);
if(pp){
if(pp.v14)f06(q,pp.v14.id);
if(pp.v04)pp.v04.v14=null;
if(IE4&&version>=6&&q.v11){
pp.style.clip="rect(0,-1,-1,0)";}
else{
pp.style.visibility="hidden";
pp.style.display="none";}}
if(q.v17&&q.v17.id==ppId)q.v17=null;};
function f07(rect,refx,refy){
var retval=new rct(rect.left-refx,rect.top-refy,rect.right-refx,rect.bottom-refy);
return retval;};
function f34(q,pp,actEl){
var items=pp.getElementsByTagName("DIV");
var i=0;
for(;i<items.length;i++)if(actEl!=items[i]&&(!items[i].id||items[i].id.indexOf("scroll")==-1)){
items[i].style.backgroundColor=pp.q.v11?"transparent":(items[i].customBg?items[i].customBg:pp.v08);
items[i].style.color=items[i].customCl?items[i].customCl:pp.v06;}};
function f08(q,pp,x,y,bDontMove,refWnd){
if(pp.id.indexOf('_')==-1){
f35(q.v18,0);}
if(q.v17&&q.v17.id==pp.id)return;
pp.style.left=x+"px";
 var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
   myWidth = document.body.clientWidth;
   myHeight = document.body.clientHeight;
  }
var abc = pp.style.height;
abcnew = abc.replace('1px','');
var h = window.pageYOffset ||
	document.body.scrollTop ||
    document.documentElement.scrollTop;
var bh = myHeight + h;
var ah = parseInt(y) + parseInt(abcnew);
var yp = y-abcnew;
var nheight =bh-y;
if (ah >= bh && y > nheight)
{
pp.style.top=yp+"px";
}
else
{
pp.style.top=y+"px";
}
if(IE4&&version>=6&&q.v11){
pp.style.clip="rect(auto,auto,auto,auto)";}
else{
pp.style.display="";
pp.style.visibility="visible";}
var v15=f19(q,pp);
var v16=f17(q.v18);
var bResize=(pp.offsetHeight<pp.maxHeight);
if(v15.right>v16.right){
if(refWnd&&refWnd.id&&refWnd.id.indexOf('tlm')==-1)pp.style.left=(Math.max(0,refWnd.offsetLeft-pp.offsetWidth+q.levelOffset))+"px";
else pp.style.left=(v16.right-pp.offsetWidth-5)+"px";}
var wnd1=zz(q.v18,pp.id+"scrollDown");
var wnd2=zz(q.v18,pp.id+"scrollUp");
var cv=mac?15:(q.bIncBorder?3:20);
if(((v15.bottom>v16.bottom)||bResize)&&!NS60){
var newtop=v16.bottom-pp.offsetHeight-cv;
if(!q.menuHorizontal)bDontMove=false;
if(q.v55&&(newtop<0||bDontMove||bResize)){
var minNum=Math.min(pp.maxHeight,v16.bottom-pp.offsetTop-cv-(q.bIncBorder?0:q.bord*2));
if(minNum>50){
pp.scrVis=(minNum!=pp.maxHeight);
f09(q,pp,v16.top,minNum);}
else{	
pp.style.top=y+"px";}}
else
pp.style.top=newtop+"px";}
if(q.v55){
wnd1.style.display=pp.scrVis?"":"none";
wnd2.style.display=pp.scrVis?"":"none";}
if(q.bShowDel&&!mac)f02(q,pp.id,q.fadingSteps);
f34(q,pp,null);};
function f09(q,pp,documentOffset,height){
var wnd2=zz(q.v18,pp.id+"scrollDown");
var wnd4=zz(q.v18,pp.id+"scrollUp");
var wnd3=zz(q.v18,pp.id+"bgWnd");
var wnd1Height=0;
if(q.v55){
wnd2.style.zIndex=maxZ+1;
wnd4.style.zIndex=maxZ+1;}
pp.style.height=height+"px";
wnd3.style.height=(height-q.v10-q.bord*2-wnd1Height)+"px";
if(q.v55){
wnd2.style.top=(height-wnd1Height-q.scrollHeight-(q.bIncBorder?q.bord*2:0))+"px";
f10(q,pp.id,0);}}
function f10(q,ppId,dir){
var pp=zz(q.v18,ppId);
var v15=f19(q,pp);
var items=pp.getElementsByTagName("DIV");
var i=(dir>0?0:items.length-1);
var off=(dir>0?1:-1);
var bFirst=true;
var offset=dir*q.scrollStep;
if(pp.scrVis){
try{
v15.top+=q.scrollHeight;
v15.bottom-=q.scrollHeight;
}
catch(e){
}
}
try{
v15.bottom-=2*q.bord;
}
catch(e){
}
var wnd1Height=0;
for(;i<items.length&&i>=0;i+=off){
var item=items[i];
if(!item.id||(item.id.indexOf("scroll")==-1&&item.id.indexOf("bgWnd")==-1)){
var itemRect=f19(q,item);
if(bFirst&&dir==0){
offset=pp.maxHeight-(item.offsetTop+item.offsetHeight)+(pp.scrVis?q.scrollHeight:0)-(q.bIncBorder?q.bord*2:0)-wnd1Height;
}
var relRect=f07(v15,itemRect.left,itemRect.top+offset);
if(dir>0&&relRect.top<-q.scrollHeight&&bFirst)return;
if(dir<0&&itemRect.bottom<v15.bottom-wnd1Height&&bFirst)return;
if(offset!=0)item.style.top=(item.offsetTop+offset)+"px";
if(!mac)item.style.clip="rect("+relRect.top+","+relRect.right+","+relRect.bottom+","+relRect.left+")";
if(relRect.bottom<0||relRect.top>item.offsetHeight)
item.style.visibility="hidden";
else
item.style.visibility="visible";
bFirst=false;}}
if(pp.scrPos)pp.scrPos+=offset;
else pp.scrPos=offset;
};
function scrollUp(q,ppId){
f10(q,ppId,1);}
function scrollDown(q,ppId){
f10(q,ppId,-1);}
function f13(q,pp){
var wnd=q.v17;
while(wnd){
if(wnd.id==pp.id)
return true;
wnd=wnd.v14;}
return false;};
function f14(){
var q=this.q;
if(q.v17&&q.v58&&f13(q,this))clearTimeout(q.v58);};
function f15(){
var q=this.q;
f15Impl(q,this);};
function f15Impl(q,pp,pid){
	if(!pp&&!pid)pp=q.v17;
	if(!pp)pp=zz(q.v18,pid+"pp");
	if(pp&&q.mout&&q.v17&&f13(q,pp)){
	if(q.v58)clearTimeout(q.v58);
	/*q.v58=setTimeout("f06("+q.name+",'"+q.v17.id+"',1);",q.closeDelay)  q.closeDelay used to control delay*/
	q.v58=setTimeout("f06("+q.name+",'"+q.v17.id+"',1);",500);
	}
};
function rct(left,top,right,bottom){
this.left=left;
this.top=top;
this.right=right;
this.bottom=bottom;};
function f17(doc){
var left=0;
var top=0;
var right;
var bottom;
if(doc.pageXOffset)left=doc.pageXOffset;
else if(doc.document.documentElement.scrollLeft)left=doc.document.documentElement.scrollLeft;
else if(doc.document.body.scrollLeft)left=doc.document.body.scrollLeft;
if(doc.pageYOffset)top=doc.pageYOffset;
else if(doc.document.documentElement.scrollTop)top=doc.document.documentElement.scrollTop;
else if(doc.document.body.scrollTop)top=doc.document.body.scrollTop;
if(doc.innerWidth)right=left+doc.innerWidth;
else if(doc.document.documentElement.clientWidth)right=left+doc.document.documentElement.clientWidth;
else if(doc.document.body.clientWidth)right=left+doc.document.body.clientWidth;
if(doc.innerHeight)bottom=top+doc.innerHeight;
else if(doc.document.documentElement.clientHeight)bottom=top+doc.document.documentElement.clientHeight;
else if(doc.document.body.clientHeight)bottom=top+doc.document.body.clientHeight;
if(bottom > 300 && doc.name)
bottom = 300 ;  /*it is used to maintain the height of dropdown only for showcase.*/
var retval=new rct(left,top,right,bottom);
return retval;};
function f18(q,wnd){
var doc=q ? q.v18.document : document;
var left=mac?parseInt(doc.body.leftMargin):0;
var top=mac?parseInt(doc.body.topMargin):0;
var right=0;
var bottom=0;
var par=wnd;
var topObj=doc.documentElement;
if(!topObj)topObj=doc.body;
while(par){
left=left+parseInt(par.offsetLeft);
top=top+parseInt(par.offsetTop);
if(par.offsetParent==par || par.offsetParent==topObj)break;
par=par.offsetParent;}
right=left+parseInt(wnd.offsetWidth);
bottom=top+parseInt(wnd.offsetHeight);
var retval=new rct(left,top,right,bottom);
return retval;};
function f19(q,wnd){
if((mac||DOM||Opera7)&&wnd.getBoundingClientRect)return wnd.getBoundingClientRect();
return f18(q,wnd);};
function f53(wn,fr){
if(wn.frames){
if(wn.frames[fr])return wn.frames[fr];
for(var i=0;i<wn.frames.length;i++){
try{
if(wn.frames[i].name==fr)return wn.frames[i];
var ret=f53(wn.frames[i],fr);
if(ret)return ret;
}catch(e){}}}
return null;};
function f20(){
var startPos=this.f54.indexOf('<!--');
if(startPos!=-1){
	var endPos=this.f54.indexOf('-->',startPos);
	/*alert("Full version of the product would now open item's URL in frame "+this.f54.substring(startPos+4,endPos))*/
	}
else{
	var msg="Full version of the product would now open item's URL ";
	if(this.owner.q.cntFrame)msg+=" in frame "+this.owner.q.cntFrame;
	else msg+="in current window/frame.";
	/*alert(msg)*/
}
window.location=this.url;
};
function f21(q){
if(q.v29Str){
eval(q.v29Str);
if(q.v29)clearTimeout(q.v29);
q.v29=setTimeout("f21("+q.name+")",q.v55);}}
function f22(){
var item=this;
var q=this.owner.q;
if(item.id&&item.id.indexOf("scroll")!=-1){
q.v29Str=item.url;
var jsind=q.v29Str.indexOf('javascript:');
if(jsind!=-1)q.v29Str=q.v29Str.substring(jsind);
f21(q);
return;}
f34(q,item.owner,item);
if(q.bHlNL || item.url || item.v30){
item.style.color=item.owner.v05;
item.style.backgroundColor=(!item.owner.v07&&q.v11)?"transparent":item.owner.v07;}
if(!q.itemOverDelay){
f222(q,item);}
else{
if(q.v59)clearTimeout(q.v59);
q.itemOverObj=item;
q.v59=setTimeout("f222 ("+q.name+",null)",q.itemOverDelay);}};
function f222(q,itemObj){
var item=(itemObj ? itemObj : q.itemOverObj);
if(!item)return;
var bOp=0;
if(item.owner.v14){
if(item.v30&&item.v30+'pp'==item.owner.v14.id)bOp=1;
if(!bOp)f06(q,item.owner.v14.id);}
if(item.status)
window.status=item.status;
else if(item.url&&item.url.indexOf("javascript:")==-1)
window.status=item.url;
else
window.status="";
if(item.v30&&!bOp){
var rect=f19(q,item);
var x=rect.right-q.levelOffset;
var y=rect.top-q.levelOffsety;
var pp=f05(q,item.v30,item.owner.level+1,item.owner);
item.owner.v14=pp;
f08(q,pp,x,y+2,false,item.owner);}};
function f23(){
var item=this;
var q=this.owner.q;
if(q.v29){q.v29Str=null;clearTimeout(q.v29);}
if(item.id&&item.id.indexOf("scroll")!=-1)return;
window.status="";};
function exM(q,ppId,refWnd,dum,ml,mt,mr,mb){
if(!docLoaded)return;
if(ppId=='none'){
if(!q.itemOverDelay&&q.v17)
f06(q,q.v17.id);
else
f15Impl(q);
if(q.v58)clearTimeout(q.v58);
return;}
var bFr=q.v19&&!q.v20;
var rect;
if(refWnd=='coords'){
rect=f18(q,zz(0,q.name+'tl'));
rect.left=rect.left+ml;
rect.top=rect.top+mt;
rect.right=rect.left+mr;
rect.bottom=rect.top+mb;}
else{
rect=f18(q,zz(0,refWnd));}
if(q.bVarWidth&&!q.v11)q.v02=rect.right-rect.left+(IE4?q.bord*2:0);
var x;
var y;
x=rect.left-q.bord;
y=rect.bottom+q.v61;
if(!q.itemOverDelay){
exM2(q,ppId,refWnd,x,y);}
else{
if(q.v59)clearTimeout(q.v59);
q.v59=setTimeout("exM2 ("+q.name+",'"+ppId+"','"+refWnd+"',"+x+","+y+")",q.itemOverDelay);}
};
function exM1(q,ppId,refWnd,dum,ml,mt,mr,mb){
if(!docLoaded)return;
if(ppId=='none'){
if(!q.itemOverDelay&&q.v17)
f06(q,q.v17.id);
else
f15Impl(q);
if(q.v58)clearTimeout(q.v58);
return;}
var bFr=q.v19&&!q.v20;
var rect;
if(refWnd=='coords'){
rect=f18(q,zz(0,q.name+'tl'));
rect.left=rect.left+ml;
rect.top=rect.top+mt;
rect.right=rect.left+mr;
rect.bottom=rect.top+mb;}
else{
rect=f18(q,zz(0,refWnd));}
if(q.bVarWidth&&!q.v11)q.v02=rect.right-rect.left+(IE4?q.bord*2:0);
var x;
var y;
x=rect.right-q.bord;
y=rect.top+q.v61;
if(!q.itemOverDelay){
exM2(q,ppId,refWnd,x,y);}
else{
if(q.v59)clearTimeout(q.v59);
q.v59=setTimeout("exM2 ("+q.name+",'"+ppId+"','"+refWnd+"',"+x+","+y+")",q.itemOverDelay);}
};
function exM2(q,ppId,refWnd,x,y)
{
	if(q.v58)clearTimeout(q.v58);
	if(q.v17&&q.v17.id!=ppId+"pp")
	f06(q,q.v17.id);
	var pp=f05(q,ppId,0,null,refWnd);
	f08(q,pp,x+q.xOff,y+q.yOff,true,null);
	q.v17=pp;
};
function coM(q,ppId){
if(!docLoaded)return;
clearTimeout(q.v59);
f15Impl(q);};
function f28(){
var nmn;
for(nmn=1;nmn<=lastm;nmn++){
var q=eval("window.m"+nmn);
if(q&&q.v17)f06(q,q.v17.id,1);}};
function f29(){
if(docLoaded)return;
var nmn;
for(nmn=1;nmn<=lastm;nmn++){
var q=eval("window.m"+nmn);
if(q){
q.v18=(q.v19&&!q.v20)?f53(window.top,q.v24):window;
q.targetFrame=(q.v19)?f53(window.top,q.cntFrame):window;
if(!q.mout)f30(q.v18.document,"mousedown",f28,false);}}
docLoaded=true;};
function f30(obj,event,fun,bubble){
if(obj.addEventListener)
obj.addEventListener(event,fun,bubble);
else
eval("obj.on"+event+"="+fun);};
function chgBg(q,item,color,cl){
if(!IE4&&!DOM&&!Opera7)return;
if(!q.v52){
var el=zz(0,item);
var ela=zz(0,item+'a');
var ncl=el.bgc ? el.bgc : q.tlmOrigBg;
var hcl=q.tlmHlBg;
var tcl=el.tc ? el.tc : q.tlmOrigCol;
if(color==0){
if(cl){
if(!q.v25){
el.style.background=ncl;
el.style.color=tcl;}
if(ela)ela.style.color=tcl;}}
else{
var bSetC=(!el.tc || !el.bgc);
if(q.actm&&q.actm!=item)chgBg(q,q.actm,0,1);
if(!q.v25){
if(color&1){if(bSetC)el.bgc=el.bgColor;el.style.background=hcl;}
if(bSetC)el.tc=el.style.color;
el.style.color=q.tlmHlCol;}
if(ela&&color&2){if(bSetC)el.tc=ela.style.color;ela.style.color=q.tlmHlCol;}
q.actm=item;
if(bSetC){if(!el.tc)el.tc=tcl;if(!el.bgc)el.bgc=ncl;}}}};
function f31(){
var i;
var l=document.lastLoadHandler;
document.lastLoadHandler=-1;
for(i=0;i<=l;i++){
var h=document.loadHandlers[i];
if(typeof(h)!='function'){
var bPar=(h.indexOf('(')==-1);
eval(h+(bPar ? '();' : ';'));}
else{
h();}}};
/*drop.js ends*/
/* following js is used to convert language*/
;
/*scroller function start*/
var Imgs=[];
function ImgLoad(cls) 
{ 
	var as=zxcByClassName(cls); 
	for (var z0=0;z0<as.length;z0++) 
	{ 
		if (as[z0].getElementsByTagName('IMG')[0].getAttribute('rel')&&as[z0].getElementsByTagName('IMG')[0]) 
		{ 
			oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getElementsByTagName('IMG')[0].getAttribute('rel')); Imgs.push(oop); 
		}
		else if(as[z0].getAttribute('rel')&&as[z0].getElementsByTagName('IMG')[0])
		{
			oop=new Fade(as[z0].getElementsByTagName('IMG')[0],as[z0].getAttribute('rel')); Imgs.push(oop); 
		}
	} 
CkTop(); 
};
function Fade(img,src)
{ 
	this.img=img; this.src=src; this.opc=0; 
};
Fade.prototype.fade=function()
{ 
	if (this.opc==0) this.img.src=this.src; 
	var oop=this; 
};
function CkTop()
{ 
	for (var z0=0;z0<Imgs.length;z0++)
	{ 
		if (zxcPos(Imgs[z0].img)[1]<zxcWWHS()[1]+zxcWWHS()[3]&&Imgs[z0].opc==0)
		{ 
			Imgs[z0].fade(); Imgs.splice(z0,1); z0--; 
		} 
	} 
};
function zxcWWHS(){ if (window.innerHeight) return [window.innerWidth-10,window.innerHeight-10,window.pageXOffset,window.pageYOffset]; else if (document.documentElement.clientHeight) return [document.documentElement.clientWidth-10,document.documentElement.clientHeight-10,document.documentElement.scrollLeft,document.documentElement.scrollTop]; return [document.body.clientWidth,document.body.clientHeight,document.body.scrollLeft,document.body.scrollTop]; };
function zxcPos(obj){ var rtn=[0,0]; while(obj){ rtn[0]+=obj.offsetLeft; rtn[1]+=obj.offsetTop; obj=obj.offsetParent; } return rtn; };
function zxcByClassName(nme,el,tag) 
{ 
	if (typeof(el)=='string') 
	el=document.getElementById(el);
	el=el||document;
	ary=[];
	if(nme != 'undefined') 
	{ 
		for (var tag=tag||'*',reg=new RegExp('\\b'+nme+'\\b'),els=el.getElementsByTagName(tag),z0=0; z0<els.length;z0++) 
		{ 
			if(reg.test(els[z0].className)) 
			ary.push(els[z0]); 
		} 
	} 

	return ary;
};
window.onscroll=CkTop;
/*thankyou and thankyou1 page functions start*/
function goback() 
{
history.go(-1);
};
/*thankyou and thankyou1 page functions closed*///plus-ninus start
var plnew = "pl2";
function show(obj, plus, obj1,plus1)
{
if(document.getElementById)
{
var el = document.getElementById(obj);
var ar = document.getElementById("ms1").getElementsByTagName("div");
for (var i=0; i<ar.length; i++)
{
if(ar[i].className == "on")
{
ar[i].className = "off";
}
}
document.getElementById(obj).className = "on";
}
if(document.getElementById(plnew))
{
document.getElementById(plnew).className = "prd lh2 a b bo7 p9 cu";
}
if(document.getElementById(plus).className == "prd lh2 a b bo7 p9 cu")
{
document.getElementById(plus).className = "pr1 lh2 a b";
}
plnew = plus;
document.getElementById(obj1).className = "off";
document.getElementById(plus1).className = "b f2 u txr p10";
}
function show1(obj, plus)
{
document.getElementById(obj).className = "on";
document.getElementById(plus).className = "off";
}
function show2(obj, plus)
{
document.getElementById(obj).className = "b f2 u txr p10";
document.getElementById(plus).className = "off";
}
//plus-ninus start
//index page view all
function tst(d) { if(d=="t1") { document.getElementById('t1').style.display = "block";document.getElementById('t2').style.display = "none"; } else { document.getElementById('t2').style.display = "block";document.getElementById('t1').style.display = "none"; }}
//  on this page drop/drop1.js,language converter.js,callfree.js, plus/minus for pages, scroller function ,search condition,pns function//
//trustseal
 /* code to add Hot image to hot products*/
 if (typeof jQuery !== 'undefined') {
 	$(document).ready(function(){
	  
	    $("div[data]:first").children("a").append('<div class="productDesc">'+$("div[data]:first").attr("data")+'</div>');
      });
      /* code to add Hot image to hot products*/
      /* Function to manage Hot div and detail on every transition start*/
	 function manageImageTransition(){
	    max = 0;
	    itemdata = "";
	    $(".slideItem").each(function(){
		if($(this).css("z-index") > max){
		max = $(this).css("z-index");
		itemdata = this;  
		}
	    });
	    $(".productDesc").remove();	
	    $(itemdata).children("a").append('<div class="productDesc">'+$(itemdata).attr("data")+'</div>'); 
	  }
}
/* Function to manage Hot div and detail on every transition end*/
function openchildts1(thisurl) 
{
browserName = navigator.appName;
browserVer = parseInt(navigator.appVersion);
condition = !(( (browserName.indexOf("Explorer") >=0 ) && (browserVer < 4) ) ||  ((browserName.indexOf("Netscape") >=0 ) && (browserVer < 2) ) ) ;
if (condition == true  )
CanAnimate = true;
else
CanAnimate = false;
if ( CanAnimate ) {
var windowHeight; var windowWidth; var windowTop; var windowLeft;
if (browserName == 'Microsoft Internet Explorer')
{
        windowWidth="550px";
}
else
{
        windowWidth="553px";
/*      windowWidth=(screen.width*(57/100)-200);*/
}
windowHeight=(screen.height*(80/100))*0.85;
windowTop=(screen.height*(20/100))*0.8; windowLeft=screen.width*(40.2/100);
msgWindow=window.open( '' ,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,top='+windowTop+',left='+windowLeft+',width='+windowWidth+',height='+windowHeight);
msgWindow.focus(); msgWindow.location.href = thisurl; }
else {
msgWindow=window.open( thisurl,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=510,height=420'); } 
};/*viewport_deffer start*/ 
function offsettop(options) {
	core_strundefined = typeof undefined;
	

	var docElem, win,
		box = { top: 0, left: 0 },
		elem = options,
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	

	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
		left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
	};
};

function getWindow( elem ) {
	return (elem != null && elem == elem.window)?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
function Windowheight() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
  
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
   
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
  
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  
  return myHeight;
}
function LoadImageinViewPort() {
var windowTopvar = (window.pageYOffset!=undefined)?window.pageYOffset:window.document.documentElement.scrollTop;

if (typeof jQuery == 'undefined') {
	var LazyImages = document.getElementsByTagName('img');
	var imageLink = "";
	
	for(i=0;i<LazyImages.length;i++){
		imageLink="";	
			
			if (parseInt(offsettop(LazyImages[i]).top) <= (parseInt(windowTopvar) + parseInt(Windowheight())) && (parseInt(offsettop(LazyImages[i]).top) + parseInt(Windowheight())) > (parseInt(windowTopvar))) {
				if(LazyImages[i].getAttribute('rel')!=null && LazyImages[i].getAttribute('rel')!=""){
					imageLink = LazyImages[i].getAttribute("rel");
				}else if(LazyImages[i].parentNode.getAttribute('rel')!=null && LazyImages[i].parentNode.getAttribute('rel')!=""){
					imageLink = LazyImages[i].parentNode.getAttribute("rel");
				}
				if(imageLink!=""){
					oop = new Fade(LazyImages[i], imageLink);
					Imgs.push(oop);
				}
			}
		
	}
} else {
    	jQuery("img[rel]").each(function () {
		if (parseInt(jQuery(this).offset().top) < (parseInt(windowTopvar) + parseInt(jQuery(window).height())) && (parseInt(jQuery(this).offset().top) + parseInt(jQuery(this).height())) > (parseInt(windowTopvar))) {
			oop = new Fade(this, this.getAttribute("rel"));
			Imgs.push(oop);
		}
	});
	jQuery("a[rel] img").each(function () {
		if (parseInt(jQuery(this).offset().top) < (parseInt(windowTopvar) + parseInt(jQuery(window).height())) && (parseInt(jQuery(this).offset().top) + parseInt(jQuery(this).height())) > (parseInt(windowTopvar))) {
			oop = new Fade(this, jQuery(this).parent("a[rel]").attr("rel"));
			Imgs.push(oop)
		}
	});
}
if (window.addEventListener)
window.addEventListener("scroll", bindFunctionOnScroll, false);
else if (window.attachEvent)
window.attachEvent("onscroll", bindFunctionOnScroll);
else window.onscroll = bindFunctionOnScroll;
CkTop();

};
var timer; 
function bindFunctionOnScroll(){ 	
	clearTimeout(timer); 
	timer = setTimeout( LoadImageinViewPort , 150 );
	};
/******** Load View Port End******************/
function hot() { document.getElementById('htb').className="don"; document.getElementById('ln').className="doff"; document.getElementById('h').className="b fl k1 w-5 ta c11"; document.getElementById('l').className="b fl w-5 cu bg4 ta k1 c10"; document.getElementById('foroffer').style.display="block"; document.getElementById('forlaunch').style.display="none"; } function newlaunch() { document.getElementById('htb').className="doff"; document.getElementById('ln').className="don"; document.getElementById('h').className="b fl w-5 cu bg4 ta k1 c10"; document.getElementById('l').className="b fl k1 w-5 ta c11"; document.getElementById('foroffer').style.display="none"; document.getElementById('forlaunch').style.display="block"; } var testnew =0; var test =1; function nexthot() { test++; if (document.getElementById('hot'+test)) { document.getElementById('hot'+test).className="don"; var testnew = test - 1; document.getElementById('hot'+testnew).className="doff"; } else { test--; }} function prehot() { if (document.getElementById('hot'+test) && test > 1) { test--; document.getElementById('hot'+test).className="don"; var testnew = test+1; document.getElementById('hot'+testnew).className="doff"; }} var launchnew =0; var launch =1; function nextlan() { launch++; if (document.getElementById('launch'+launch)) { document.getElementById('launch'+launch).className="don"; var launchnew = launch - 1; document.getElementById('launch'+launchnew).className="doff"; } else { launch--; }} function prelan() { if (document.getElementById('launch'+launch) && launch > 1) { launch--;document.getElementById('launch'+launch).className="don";var launchnew = launch+1;document.getElementById('launch'+launchnew).className="doff"; }}
