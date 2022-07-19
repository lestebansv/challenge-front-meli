import { render } from "@testing-library/react";
import connection from "../utils/channel";
import DescriptionProduct from "./DescriptionProduct";

describe("DescriptionProduct", () => {

    it('validate render view', async () => {
        await connection('MLA1135260991', "product");

        const { container } = render(<DescriptionProduct />);

        expect(container).toMatchSnapshot();
    });
    
});