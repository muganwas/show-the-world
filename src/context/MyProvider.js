import React from 'react';
import { MyContext } from '.';
class MyProvider extends React.Component {
    state = {
        dashTitle: 'Dashboard',
        user: { name: 'Steven', id: '12345' },
        transactions: [],
        notifications: [],
        settings: []
    }
    render() {
        return (
            <MyContext.Provider value={{
                dashTitle: this.state.dashTitle,
                user: this.state.user,
                transactions: this.state.transactions,
                notifications: this.state.notifications,
                settings: this.state.settings,
                updateUser: user => this.setState({ user }),
                updateDashTitle: dashTitle => this.setState({ dashTitle }),
                updateTransactions: transactions => this.setState({ transactions }),
                updateNotifications: notifications => this.setState({ notifications }),
                updateSettings: settings => this.setState({ settings })
            }} >
                {this.props.children}
            </MyContext.Provider>)
    };
};

export default MyProvider;