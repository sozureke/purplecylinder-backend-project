import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { ProductController } from './product.controller'
import { ProductModel } from './product.model'
import { ProductService } from './product.service'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ProductModel,
				schemaOptions: {
					collection: 'Product'
				}
			}
		]),
		ConfigModule
	],
	providers: [ProductService],
	controllers: [ProductController],
	exports: [TypegooseModule.forFeature([ProductModel]), ProductService]
})
export class ProductModule {}
