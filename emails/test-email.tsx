import {
	Body,
	Button,
	Column,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from '@react-email/components'

import {cn} from "@/lib/utils/cn";
import {baseUrl} from "@/lib/utils/constants";
import {config, configDark} from "../lib/styles/config";
console.log("config", config)
const Email = () => {
  return (
		<Html>
			<Tailwind config={config}>
				<Head />
				<Body
					className={cn(
						'bg-background mx-auto my-auto font-sans',
						
					)}
				>
					<Preview>Preview Text</Preview>

					<Container className="border-secondary-light mx-auto my-[40px] max-w-[640px] rounded border border-solid">

						<Section className="my-[16px] w-10/12">
							<Img
								alt="Herman Miller Chair"
								className="w-full rounded-[12px] object-cover"
								height="320"
								src={`${baseUrl}/static/herman-miller-chair.jpg`}
							/>
							<Section className="mt-[32px] text-center">
								<Text className="my-[16px] text-[18px] leading-[28px] font-semibold text-primary">
									Our new article
								</Text>
								<Heading
									as="h1"
									className="m-0 mt-[8px] text-[36px] leading-[36px] font-semibold text-foreground-dark"
								>
									Designing with Furniture
								</Heading>
								<Text className="text-[16px] leading-[24px] text-foreground">
									Unleash your inner designer as we explore how furniture plays a vital role in
									creating stunning interiors, offering insights into choosing the right pieces,
									arranging them harmoniously, and infusing your space with personality.
								</Text>
								<Button
									className="mt-[16px] rounded-[8px] bg-primary px-[40px] py-[12px] font-semibold text-white"
									href="https://react.email"
								>
									Read more
								</Button>
							</Section>
						</Section>

						<Section className="my-[16px] w-10/12 text-center">
							<Section className="inline-block w-full max-w-[250px] text-left align-top">
								<Text className="m-0 text-[16px] leading-[24px] font-semibold text-primary">
									What's new
								</Text>
								<Text className="m-0 mt-[8px] text-[20px] leading-[28px] font-semibold text-foreground-dark">
									Versatile Comfort
								</Text>
								<Text className="mt-[8px] text-[16px] leading-[24px] text-foreground">
									Experience ultimate comfort and versatility with our furniture collection,
									designed to adapt to your ever-changing needs.
								</Text>
								<Link className="text-primary underline" href="https://react.email">
									Read more
								</Link>
							</Section>
							<Section className="my-[8px] inline-block w-full max-w-[220px] align-top">
								<Img
									alt="An aesthetic picture taken of an Iphone, flowers, glasses and a card that reads 'Gucci, bloom' coming out of a leathered bag with a ziper"
									className="rounded-[8px] object-cover"
									height={220}
									src={`${baseUrl}/static/versatile-comfort.jpg`}
									width={220}
								/>
							</Section>
						</Section>

						<Section className="my-[16px]">
							<Section className="mt-[42px] w-10/12">
								<Row>
									<Text className="m-0 text-[16px] leading-[24px] font-semibold text-primary">
										Our products
									</Text>
									<Text className="m-0 mt-[8px] text-[24px] leading-[32px] font-semibold text-foreground-dark">
										Elegant Style
									</Text>
									<Text className="mt-[8px] text-[16px] leading-[24px] text-foreground">
										We spent two years in development to bring you the next generation of our
										award-winning home brew grinder. From the finest pour-overs to the coarsest cold
										brews, your coffee will never be the same again.
									</Text>
								</Row>
							</Section>
							<Section className="mt-[16px] w-10/12">
								<Row className="mt-[16px]">
									<Column className="w-[50%] pr-[8px]">
										<Link href="#">
											<Img
												alt="Stagg Electric Kettle"
												className="w-full rounded-[12px] object-cover"
												height={288}
												src={`${baseUrl}/static/stagg-eletric-kettle.jpg`}
											/>
										</Link>
									</Column>
									<Column className="w-[50%] pl-[8px]">
										<Link href="#">
											<Img
												alt="Ode Grinder"
												className="w-full rounded-[12px] object-cover"
												height={288}
												src={`${baseUrl}/static/ode-grinder.jpg`}
											/>
										</Link>
									</Column>
								</Row>
								<Row className="mt-[16px]">
									<Column className="w-[50%] pr-[8px]">
										<Link href="#">
											<Img
												alt="Atmos Vacuum Canister"
												className="w-full rounded-[12px] object-cover"
												height={288}
												src={`${baseUrl}/static/atmos-vacuum-canister.jpg`}
											/>
										</Link>
									</Column>
									<Column className="w-[50%] pl-[8px]">
										<Link href="#">
											<Img
												alt="Clyde Electric Kettle"
												className="w-full rounded-[12px] object-cover"
												height={288}
												src={`${baseUrl}/static/clyde-electric-kettle.jpg`}
											/>
										</Link>
									</Column>
								</Row>
							</Section>
						</Section>
						<Section className="mx-auto w-10/12">
							<Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
};

export default Email;