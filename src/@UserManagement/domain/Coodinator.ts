// idCoordinator String @id @default(uuid())
// idUser        String @unique
// institution   String

interface CoordinatorProps {
    idCoordinator: string;
    idUser: string;
    institution: string;
}

export class Coordinator {
    idCoordinator: string;
    idUser: string;
    institution: string;

    constructor(coordinator: CoordinatorProps) {
        this.idCoordinator = coordinator.idCoordinator;
        this.idUser = coordinator.idUser;
        this.institution = coordinator.institution;
    }
}
