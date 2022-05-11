import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";

describe(LikeWidgetComponent.name, () => {
    // let component: LikeWidgetComponent = null;
    let component: LikeWidgetComponent = new LikeWidgetComponent(new UniqueIdService());

    beforeEach(() => {
        component = new LikeWidgetComponent(new UniqueIdService());
    });
})