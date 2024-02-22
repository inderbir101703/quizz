export default function UserButton({addClasses,index,selectedIndex,onClick,children,...props}){
return  <li className="answer">
<button className={addClasses}  onClick={onClick} {...props}>{children}</button>
</li>
}