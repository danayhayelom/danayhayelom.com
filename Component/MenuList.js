import {Menu} from 'antd'
import {HomeOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
    PayCircleOutlined,
    SettingOutlined,
    BarsOutlined
} 
from '@ant-design/icons';
function MenuList(){
    return(<Menu theme="dark" mode="inline" className="menu-bar">
<Menu.Item key="home" icon = {< HomeOutlined />}>
Home
</Menu.Item>
<Menu.Item key="activity" icon = {< AppstoreOutlined />}>
Activity
</Menu.Item>
<Menu.SubMenu key="subtasks" icon = {<BarsOutlined/>} title="Tasks">
<Menu.Item key="task-1">Task1</Menu.Item>
<Menu.Item key="task-2">Task2</Menu.Item>
<Menu.SubMenu key="subtasks" title="Subtasks">
    <Menu.Item key="subtasks-1">Subtasks-1</Menu.Item>
    <Menu.Item key="subtasks-2">Subtasks-2</Menu.Item>

    </Menu.SubMenu>
</Menu.SubMenu>
<Menu.Item key="progress" icon = {< AreaChartOutlined />}>
Progress
</Menu.Item>
<Menu.Item key="payment" icon = {< PayCircleOutlined />}>
Payment 
</Menu.Item>
<Menu.Item key="setting" icon = {< SettingOutlined />}>
Setting
</Menu.Item>
    </Menu>);
}
export default MenuList