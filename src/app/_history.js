export default class History{
    static load_history(property_name,default_value){
        //property-builder
        const history=this.props.location.state||{};
        return history.state ? ( history.state ? history.state[property_name] || default_value : default_value ) : default_value;
    }
}