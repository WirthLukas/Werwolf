import React, { Component } from 'react';
import { Role } from '../../models/role.model';

export interface ChooseRolesProps {
    roles: Role[];
}

// export interface State {}

export default class ChooseRoles extends Component<ChooseRolesProps> {
    private roles: Role[];

    constructor(props: ChooseRolesProps) {
        super(props);
        this.roles = props.roles;
    }

    render(): JSX.Element {
        return (
            <div>
                {this.roles.map(r => (
                    <div key={r.name}>
                        <div>
                            <img src={r.imageLink} alt="role" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
